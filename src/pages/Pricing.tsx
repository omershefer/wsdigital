import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { useApiCall } from "@/hooks/useApiCall";

// Define types for our data structures
interface ApiPricingItem {
  [key: string]: string;
}

interface ApiQuestionItem {
  [key: string]: string;
}

interface ApiResponse {
  packeges: ApiPricingItem[];
  questions: ApiQuestionItem[];
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  maintenance: string;
  isPopular: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

function Pricing() {
  const navigate = useNavigate();
  const { fetchWithParams, loading, error, data } = useApiCall<ApiResponse>();
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([]);
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);

  // Function to handle API call - only run once when component mounts
  useEffect(() => {
    const init = async (): Promise<void> => {
      try {
        await fetchWithParams(
          "https://hook.eu2.make.com/7fkgnwmw6kabhh40p01wde9699lo85rn"
        );
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    init();
  }, []);

  // Process the data when it changes
  useEffect(() => {
    if (data) {
      // Process pricing packages
      if (data.packeges && Array.isArray(data.packeges)) {
        const formattedTiers: PricingTier[] = data.packeges.map(
          (item: ApiPricingItem, index: number) => {
            // Split features string into array
            const featuresString = item["3"] || "";
            const features = featuresString
              .split(", ")
              .filter((feature: string) => feature.trim() !== "");

            return {
              name: item["0"] || "",
              price: item["1"] || "0", // Store price without ₪ symbol
              description: item["2"] || "",
              features: features,
              maintenance: item["4"] || "0", // Store maintenance without ₪ symbol
              isPopular: index === 1, // Making the middle option popular
            };
          }
        );

        setPricingTiers(formattedTiers);
      }

      // Process FAQ questions
      if (data.questions && Array.isArray(data.questions)) {
        const formattedQuestions: FaqItem[] = data.questions.map(
          (item: ApiQuestionItem) => {
            return {
              question: item["0"] || "",
              answer: item["1"] || "",
            };
          }
        );

        setFaqItems(formattedQuestions);
      }
    }
  }, [data]);

  // Add debug logging
  console.log("Render state:", {
    loading,
    error,
    dataExists: !!data,
    tierCount: pricingTiers.length,
    faqCount: faqItems.length,
  });

  return (
    <Layout
      title="ויצמן-שפר דיגיטל - תמחור"
      description="חבילות מחירים לעיצוב ופיתוח אתרים מבית ויצמן-שפר דיגיטל"
      canonicalUrl="/wsdigital/pricing"
      bgColor="bg-white"
    >
      <div className="relative w-full">
        {/* Background decorative elements */}
        <div className="absolute right-0 top-20 w-64 h-64 bg-[#214f36]/5 rounded-full -z-10"></div>
        <div className="absolute left-10 bottom-20 w-40 h-40 bg-[#214f36]/10 rounded-full -z-10"></div>
      </div>
      <div>
        <main className="lg:w-full lg:min-h-[90vh] px-8 lg:mt-10 flex bg-white rounded flex-col items-center my-5">
          {/* Header */}
          <div className="text-right ml-auto mb-16 mt-8">
            <h1
              className="text-4xl md:text-5xl font-normal text-[#214f36] mb-6"
              onClick={() => console.log(data)}
            >
              מחירים
            </h1>
            <div className="h-1 w-16 bg-[#214f36]/60 mx-auto rounded-full"></div>
          </div>

          {/* Pricing Cards */}
          {loading && (
            <div className="flex justify-center items-center w-full py-16">
              <div className="h-12 w-12 border-4 border-[#214f36] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {!loading && error && (
            <div className="text-center text-red-600 py-8">
              אירעה שגיאה בטעינת הנתונים. אנא נסו שוב מאוחר יותר.
            </div>
          )}

          {!loading && !error && pricingTiers.length > 0 && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 relative flex flex-col ${
                    tier.isPopular ? "" : ""
                  }`}
                >
                  {/*
                  {tier.isPopular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-[#214f36] text-white rounded-full text-sm">
                      הכי פופולרי
                    </div>
                  )}
                  */}
                  <h2 className="text-2xl font-normal text-[#214f36] mb-2">
                    {tier.name}
                  </h2>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="font-sans">₪</span>
                    <span className="text-gray-500"> / חד פעמי</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 font-sans">+ </span>
                    <span className="text-sm text-gray-500">
                      {tier.maintenance}
                    </span>
                    <span className="text-sm text-gray-500 font-sans">₪</span>
                    <span className="text-sm text-gray-500">
                      / תחזוקה חודשית
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6">{tier.description}</p>
                  <div className="flex-grow">
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-[#214f36] ml-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => navigate("/home#contact")}
                    className="w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[#214f36] text-white rounded-full py-3 px-6 text-center active:bg-[#1a3f2b] shadow-md"
                  >
                    בחירת חבילה
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Show message when data is loaded but empty */}
          {!loading && !error && pricingTiers.length === 0 && (
            <div className="text-center text-gray-600 py-8">
              לא נמצאו חבילות מחירים. אנא נסו שוב מאוחר יותר.
            </div>
          )}

          {/* FAQ Section */}
          <div className="w-full max-w-4xl mb-16">
            <h2 className="text-3xl font-normal text-[#214f36] mb-6 text-center">
              שאלות נפוצות
            </h2>
            <div className="h-1 w-16 bg-[#214f36]/60 mx-auto mb-10 rounded-full"></div>

            <div className="space-y-6">
              {faqItems.length > 0
                ? faqItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                    >
                      <h3 className="text-xl font-medium text-[#214f36] mb-3">
                        {item.question}
                      </h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))
                : /* Fallback to hardcoded FAQ if API data is not available */
                  [
                    {
                      question: "כמה זמן לוקח לבנות אתר?",
                      answer:
                        "זמן הפיתוח משתנה בהתאם לגודל ומורכבות הפרויקט. בדרך כלל, דף נחיתה פשוט יכול להיות מוכן תוך שבוע, בעוד שאתר מלא עשוי לקחת 3-4 שבועות.",
                    },
                    {
                      question: "האם יש עלויות נוספות מלבד המחיר המוצג?",
                      answer:
                        "המחירים כוללים את כל שירותי הפיתוח המפורטים. עלויות נוספות עשויות לכלול אחסון שנתי, חידוש דומיין, או שינויים משמעותיים לאחר השלמת הפרויקט.",
                    },
                    {
                      question: "האם ניתן לבנות חבילה מותאמת אישית?",
                      answer:
                        "בהחלט! אנחנו מבינים שכל עסק הוא ייחודי. נשמח ליצור חבילה מותאמת במיוחד לצרכים שלך.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                    >
                      <h3 className="text-xl font-medium text-[#214f36] mb-3">
                        {item.question}
                      </h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full max-w-4xl mb-16">
            <div className="py-8 px-10 w-full flex flex-col bg-[#214f36] text-white rounded-3xl shadow-lg">
              <h2 className="text-3xl font-normal mb-4">
                צריכים עזרה בבחירת החבילה המתאימה?
              </h2>
              <div className="h-1 w-16 bg-white/60 mb-6 rounded-full"></div>
              <div className="flex flex-col lg:flex-row">
                <p className="self-start w-full lg:w-[70%] text-lg text-white/90 mb-6 lg:mb-0">
                  אנחנו מבינים שכל עסק הוא ייחודי ויש לו צרכים שונים. נשמח לשבת
                  איתכם ולהבין את הדרישות המדויקות כדי להציע את הפתרון הטוב
                  ביותר.
                </p>
                <a
                  onClick={() => navigate("/home#contact")}
                  className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white text-[#214f36] rounded-full py-3 px-6 mr-5 self-end mt-auto lg:w-[30%] text-center active:bg-gray-100 shadow-md cursor-pointer"
                >
                  דברו איתנו
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Pricing;
