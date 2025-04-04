import { useEffect, useState } from "react";
import Layout from "./Layout";
import Chart from "../components/homepage/Chart";
import Carousel from "../components/homepage/Carousel";
import LogoCloudPc from "../components/homepage/LogoCloudPc";
import LogoCloudMobile from "../components/homepage/LogoCloudMobile";
import ContactForm from "@/components/homepage/ContactForm";
import deviceMockups from "../images/devices-fixed.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <Layout >
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
                עיצוב מודרני, חוויית משתמש נוחה, וביצועים אופטימליים.
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
          {/* Our partners section */}
          <div className="bg-slate-900 p-3 w-full lg:w-[98%] h-[65vh] rounded-b-xl flex flex-col items-center">
            <h2 className="text-white text-3xl my-5 self-start">
              השותפים שלנו
            </h2>
            {isMobile ? <LogoCloudMobile /> : <LogoCloudPc />}
          </div>
        </main>
      </div>

      {/* Contact Section (Anchor Point for Scrolling) */}
      <div
        id="contact"
        className="flex flex-row flex-1 p-5 lg:w-[98%] mb-3 rounded lg:bg-[#2d3031] justify-between items-center self-center"
      >
        <ContactForm />
        {!isMobile && (
          <img src={deviceMockups} alt="" className="max-w-[50%]" />
        )}
      </div>
    </Layout>
  );
}
