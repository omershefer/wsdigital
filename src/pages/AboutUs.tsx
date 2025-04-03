import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import TextCard from "../components/general/TextCard";
import firstPicSrc from "../images/pic-of-us.png";
import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="min-w-full min-h-screen overflow-y-auto overflow-x-hidden bg-blue-50 flex flex-1 flex-col items-center font-primary">
      <title>ויצמן-שפר דיגיטל- עלינו</title>
      <meta
        name="description"
        content="גלו מי עומד מאחורי ויצמן-שפר דיגיטל, מה הערכים שלנו, החזון שלנו, ועוד"
      />

      <link rel="canonical" href="/wsdigital/aboutus" />
      <div className="w-full">
        <header>
          <Header />
        </header>
      </div>
      <div>
        <main className="lg:w-full lg:h-[100vh] px-8 lg:mt-10 flex bg-blue-50 roundedflex-col items-center my-5">
          <div className="w-full h-full space-y-5 lg:space-y-0 lg:gap-20 lg:grid lg:grid-cols-10 lg:grid-rows-10">
            <TextCard
              title="יהב ויצמן"
              text="את האפליקציה הראשונה שלי בניתי בגיל 13 ואת האתר הראשון בגיל 16, בוגר תוכנית המנהיגות לנוער עמיתי דילר. מפתח אתרים מתוך תשוקה ואהבה לתחום ורצון לתת לאחרים להפיק ערך מהיכולות שלי. "
              className="col-start-4 col-span-3 row-start-1 row-span-5"
            />
            <TextCard
              title="עומר שפר"
              text="את האפליקציה הראשונה שלי בניתי בגיל 13 ואת האתר הראשון בגיל 16, בוגר תוכנית המנהיגות לנוער עמיתי דילר. מפתח אתרים מתוך תשוקה ואהבה לתחום ורצון לתת לאחרים להפיק ערך מהיכולות שלי. "
              className="col-start-1 col-span-3 row-start-1 row-span-5"
            />
            <img
              src={firstPicSrc}
              alt="תמונה של עומר שפר ויהב ויצמן"
              className="col-start-7 col-end-11 row-start-1 row-end-6 lg:w-[80%] self-center mr-auto ml-auto"
            />
            <div className="col-start-1 col-span-6 row-start-6 row-span-5">
              <div className="py-5 pr-6 w-full h-full flex flex-col bg-[#d3ebfb] rounded-4xl drop-shadow-[20px_20px_22.2px_rgba(0,0,0,0.2)] backdrop-blur-[50px] transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <h1 className="text-4xl mb-3">הסיפור שלנו</h1>
                <div className="flex flex-col lg:flex-row h-full">
                  <p className="self-start w-full lg:w-[78%] text-lg">
                    {`החיבור בינינו היה מיידי, ומהרגע הראשון הבנו שאנחנו לא סתם עוד שני נערים בני 18- החברות הטובה שלנו בנוסף ליכולת לשתף פעולה בצורה יוצאת דופן, הובילו אותנו לפתוח את ויצמן-שפר דיגיטל, מקום עם נקודת מבט חדשה על התחום מתוך חוויה של גדילה לצד הרשת, והבנה עמוקה של הציפיות והדרישות של הגולשים כיום.
כל אלו מבטיחים הצלחה ועמידה בציפיות בין אם בארגון לוגיסטי של אירוע הנצחה חברתי או סמינר ל500 בני נוער מכל רחבי הארץ, או בפיתוח אתר התדמית/דף הנחיתה הבא שלכם.
מצפים לשמוע ממכם בקרוב, ויצמן-שפר דיגיטל.`
                      .split("\n")
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                  <a
                    onClick={() => navigate("/contact")}
                    className="bg-black text-white rounded-md py-3 ml-5 self-end mt-auto w-[30%] text-center active:text-black active:bg-white drop-shadow-[20px_20px_22.2px_rgba(0,0,0,0.2)]"
                  >
                    צור קשר
                  </a>
                </div>
              </div>
            </div>
            <div className="col-start-7 col-end-11 row-start-6 row-end-11 rounded-4xl h-full w-full bg-black text-center text-white text-3xl flex items-center justify-center">
              עוד תמונה
            </div>
          </div>
        </main>
      </div>

      <div className="w-full">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default AboutUs;
