import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "שם חייב להכיל לפחות 2 תווים",
  }),
  phoneNumber: z.string().min(9, {
    message: "אנא הזן מספר טלפון תקין",
  }),
  email: z.string().email({
    message: "אנא הזן כתובת אימייל תקינה",
  }),
  subject: z.string().min(2, {
    message: "נושא חייב להכיל לפחות 2 תווים",
  }),
  message: z.string().min(10, {
    message: "הודעה חייבת להכיל לפחות 10 תווים",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with react-hook-form and zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Send email
      await sendToEmail(data);

      // Send to Google Sheets
      await sendToDocs(data);

      // Show success toast
      toast.success("ההודעה נשלחה בהצלחה!", {
        description: "תודה על פנייתך. נחזור אליך בהקדם.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      // Show error toast
      toast.error("שגיאה בשליחת ההודעה", {
        description: "אנא נסה שוב מאוחר יותר.",
      });

      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Email sending function
  const sendToEmail = async (data: z.infer<typeof formSchema>) => {
    const templateParams = {
      from_name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber || "",
      subject: data.subject,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        String(import.meta.env.VITE_EMAILJS_SERVICE_KEY),
        String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
        templateParams,
        String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      );
      return response;
    } catch (error) {
      throw new Error("Error sending email: " + error);
    }
  };

  // Google Sheets logging function
  const sendToDocs = async (data: z.infer<typeof formSchema>) => {
    const url =
      "https://script.google.com/macros/s/AKfycbyIaElAhBWRms7msmPH3rmdlyujy7ClHtH8N14CzvBS-VE_HkS-sslEAgCs65azRsN0aA/exec";

    const nameEncoded = encodeURIComponent(data.name);
    const phoneNumberEncoded = encodeURIComponent(data.phoneNumber || "");
    const emailEncoded = encodeURIComponent(data.email);
    const dateEncoded = encodeURIComponent(getFormattedDateTime());

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${nameEncoded}&email=${emailEncoded}&phoneNumber=${phoneNumberEncoded}&date=${dateEncoded}`,
      mode: "no-cors",
    });
    console.log(response);
  };

  // Function to get formatted date and time
  function getFormattedDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  return (
    <div
      className="w-[98vw] mb-4 lg:w-full border border-gray-300 max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg"
      aria-labelledby="contact-form"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
          dir="rtl"
          aria-describedby="contact-form-description"
        >
          <h2 className="text-2xl text-center mb-6" id="contact-form">
            צור קשר
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">שם מלא</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      aria-label="שם מלא"
                      placeholder="השם של איש הקשר איתנו"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phoneNumber">מספר טלפון</FormLabel>
                  <FormControl>
                    <Input
                      id="phoneNumber"
                      aria-label="מספר טלפון"
                      type="tel"
                      placeholder="05x-xxxxxxx"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">אימייל</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    aria-label="אימייל"
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="subject">נושא</FormLabel>
                <FormControl>
                  <Input
                    id="subject"
                    aria-label="נושא"
                    placeholder="אתר/דף נחיתה ל..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message">הודעה</FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    aria-label="הודעה"
                    placeholder="באיזה שעות לחזור אליכם, הערות, בקשות, בירורים..."
                    className="resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            aria-label={isSubmitting ? "שולח את הטופס" : "שלח את הטופס"}
            tabIndex={0}
            className="w-full bg-white text-black rounded py-1 active:bg-black active:text-white focus:ring-2 focus:ring-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "שולח..." : "שלח"}
          </button>
        </form>
      </Form>
      <Toaster richColors />
    </div>
  );
}
