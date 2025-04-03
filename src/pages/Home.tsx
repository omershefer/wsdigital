import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import Chart from "../components/homepage/Chart";
import Carousel from "../components/homepage/Carousel";
import LogoCloudPc from "../components/homepage/LogoCloudPc";
import LogoCloudMobile from "../components/homepage/LogoCloudMobile";
import ContactForm from "@/components/homepage/ContactForm";
import deviceMockups from "../images/devices-fixed.png";

import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="min-w-full min-h-screen overflow-y-auto overflow-x-hidden bg-blue-50 flex flex-1 flex-col items-center justify-center font-primary">
      <title>שפר-ויצמן דיגיטל</title>
      <meta
        name="description"
        content="ויצמן-שפר דיגיטל- בונים אתרים שיעיפו לכם את העסק קדימה"
      />
      <link rel="canonical" href="/wsdigital/home" />
      <div className="w-full">
        <header>
          <Header />
        </header>
      </div>
      <div className="w-full">
        <main className="w-full flex mx-auto flex-col items-center my-5">
          <div className="bg-[#214f36] p-3 lg:w-[98%] rounded-t-xl flex flex-col items-center">
            <h1 className="text-6xl mt-1 mx-2 lg:mx-0 lg:mt-14 lg:mb-10 text-white">
              פתרונות מודרניים לבעיות מודרניות.
            </h1>
            <div className="flex flex-col lg:flex-row w-full lg:my-5 items-center lg:justify-around">
              <p className=" lg:w-[40vw] self-start mb-2 lg:mr-12 mt-6 text-white text-lg lg:text-xl">
                מתמחים בפיתוח אתרים ודפי נחיתה מקצועיים לעסקים, יזמים וארגונים
                המעוניינים ליצור נוכחות דיגיטלית. פתרונות מותאמים אישית שמשלבים
                עיצוב מודרני, חוויית משתמש נוחה, וביצועים אופטימליים. כל פרויקט
                אצלנו נבנה מתוך חשיבה אסטרטגית, תוך התאמה לקהל היעד ולמטרות
                העסקיות של הלקוח.
              </p>
              <div className="min-w-[95%] my-3 lg:max-w-[30vw] lg:min-w-[20vw] lg:ml-12">
                <Chart />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col bg-[#2C3537] pt-3 px-3 pb-10 w-full lg:w-[98%] min-h-[50%]">
            <h2 className="text-white text-3xl">העבודות שלנו</h2>
            <div className="flex justify-center mx-auto w-[75%]" dir="ltr">
              <Carousel />
            </div>
          </div>
          {/*our partners section */}
          <div className="bg-slate-900 p-3 w-full lg:w-[98%] h-[65vh] rounded-b-xl flex flex-col items-center drop-shadow-[3.55px_3.55px_22.2px_rgba(0,0,0,0.2)] backdrop-blur-[9px]">
            <h2 className="text-white text-3xl my-5 self-start">
              השותפים שלנו
            </h2>
            {isMobile ? <LogoCloudMobile /> : <LogoCloudPc />}
          </div>
        </main>
      </div>

      <div className="flex flex-row flex-1 p-5 lg:w-[98%] mb-3 rounded lg:bg-[#2d3031] justify-between items-center self-center">
        <ContactForm />
        {!isMobile && <img src={deviceMockups} alt="" className="max-w-[50%]" />}
      </div>

      <div className="w-full">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
