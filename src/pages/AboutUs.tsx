import { useNavigate } from "react-router-dom";
import Layout from "./Layout"; // import the Layout component
import firstPicSrc from "../images/pic-of-us.png";
import React from "react";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <Layout
      title="ויצמן-שפר דיגיטל- עלינו"
      description="גלו מי עומד מאחורי ויצמן-שפר דיגיטל, מה הערכים שלנו, החזון שלנו, ועוד"
      canonicalUrl="/wsdigital/aboutus"
      bgColor="bg-white"
    >
      <div className="relative w-full">
        {/* Background decorative elements */}
        <div className="absolute right-0 top-20 w-64 h-64 bg-[#214f36]/5 rounded-full -z-10"></div>
        <div className="absolute left-10 bottom-20 w-40 h-40 bg-[#214f36]/10 rounded-full -z-10"></div>
      </div>
      <div>
        <main className="lg:w-full lg:min-h-[90vh] px-8 lg:mt-10 flex bg-white rounded flex-col items-center my-5">
          <div className="w-full h-full space-y-5 lg:space-y-0 lg:gap-8 lg:grid lg:grid-cols-10 lg:grid-rows-10">
            {/* First team member card */}
            <div className="col-start-4 col-span-3 row-start-1 row-span-5 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <h2 className="text-2xl font-normal text-[#214f36] mb-4">
                יהב ויצמן
              </h2>
              <p className="text-gray-700">
                את האפליקציה הראשונה שלי בניתי בגיל 13 ואת האתר הראשון בגיל 16,
                בוגר תוכנית המנהיגות לנוער עמיתי דילר. מפתח אתרים מתוך תשוקה
                ואהבה לתחום ורצון לתת לאחרים להפיק ערך מהיכולות שלי.
              </p>
            </div>

            {/* Second team member card */}
            <div className="col-start-1 col-span-3 row-start-1 row-span-5 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <h2 className="text-2xl font-normal text-[#214f36] mb-4">
                עומר שפר
              </h2>
              <p className="text-gray-700">
                את האפליקציה הראשונה שלי בניתי בגיל 13 ואת האתר הראשון בגיל 16,
                בוגר תוכנית המנהיגות לנוער עמיתי דילר. מפתח אתרים מתוך תשוקה
                ואהבה לתחום ורצון לתת לאחרים להפיק ערך מהיכולות שלי.
              </p>
            </div>

            {/* Team image */}
            <div className="col-start-7 col-end-11 row-start-1 row-end-6 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={firstPicSrc}
                alt="תמונה של עומר שפר ויהב ויצמן"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Our story section */}
            <div className="col-start-1 col-span-6 row-start-6 row-span-5">
              <div className="py-6 px-8 w-full h-full flex flex-col bg-[#214f36] text-white rounded-3xl shadow-lg ">
                <h1 className="text-3xl md:text-4xl font-normal mb-4">
                  הסיפור שלנו
                </h1>
                <div className="h-1 w-16 bg-white/60 mb-6 rounded-full"></div>
                <div className="flex flex-col lg:flex-row h-full">
                  <p className="self-start w-full lg:w-[78%] text-lg text-white/90">
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
                    onClick={() => navigate("/home#contact")}
                    className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white text-[#214f36] rounded-full py-3 px-6 ml-5 self-end mt-auto lg:w-[30%] text-center active:bg-gray-100 shadow-md"
                  >
                    צור קשר
                  </a>
                </div>
              </div>
            </div>

            {/* Second image placeholder */}
            <div className="col-start-7 col-end-11 row-start-6 row-end-11 rounded-3xl h-full w-full overflow-hidden shadow-lg relative group">
              <div className="absolute inset-0 bg-[#214f36]/80 flex items-center justify-center text-white transition-opacity duration-300 group-hover:bg-[#214f36]/90">
                <span className="text-3xl">עוד תמונה</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default AboutUs;
