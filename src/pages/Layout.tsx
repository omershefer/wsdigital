import { ReactNode } from "react";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonicalUrl?: string;
  bgColor?: string;
}

export default function Layout({
  children,
  title = "שפר-ויצמן דיגיטל",
  description = "ויצמן-שפר דיגיטל- בונים אתרים שיעיפו לכם את העסק קדימה",
  canonicalUrl = "/wsdigital/home",
  bgColor = "bg-blue-50",
}: LayoutProps) {


  return (
    <div
      className={`min-w-full min-h-screen overflow-y-auto overflow-x-hidden ${bgColor} flex flex-1 flex-col items-center justify-center font-primary`}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <div className="w-full">
        <header>
          <Header />
        </header>
      </div>

      {/* Main content area where page-specific content will be rendered */}
      {children}

      <div className="w-full">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
