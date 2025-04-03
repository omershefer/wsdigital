import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import { useApiCall } from "@/hooks/useApiCall";
import WorkExample from "../components/work examples/WorkExample";
import ContactForm from "@/components/homepage/ContactForm";
import deviceMockups from "../images/devices-fixed.png";
import { useEffect, useState } from "react";

function WorkExamplesPage() {
  const { fetchWithParams, loading, error, data } = useApiCall<any>();
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const init = async () => {
      await fetchWithParams(
        "https://hook.eu2.make.com/7fkgnwmw6kabhh40p01wde9699lo85rn"
      );
    };

    init();
    setIsMobile(window.innerWidth <= 768);
  }, []);

  if (loading) {
    return (
      <div className="min-w-full min-h-screen overflow-y-visible overflow-x-hidden bg-blue-50 flex flex-1 flex-col items-center font-primary">
        <title>ויצמן-שפר דיגיטל- העבודות שלנו</title>
        <meta
          name="description"
          content="דני קגנוביץ׳- אימונים ותזונה, הדבשת-עגלת קפה במדבר ועוד"
        />

        <link rel="canonical" href="/wsdigital/catalog" />
        <div className="w-full">
          <header>
            <Header />
          </header>
        </div>
        <div>
          <main className="w-[100vw] h-auto mx-2 flex rounded flex-col items-center my-5">
            <div className="grid gap-8">
              <WorkExample loading={true} />
              <WorkExample loading={true} />
            </div>
          </main>
        </div>

        <p className="text-blac text-xl lg:mb-5">
          אתר שיגרום לאנשים להגיד וואו, עלינו.
        </p>

        <div className="flex flex-row flex-1 p-5 lg:w-[98%] mb-3 rounded lg:bg-[#2d3031] justify-between items-center self-center">
          <ContactForm />
          {!isMobile && (
            <img src={deviceMockups} alt="" className="max-w-[50%]" />
          )}
        </div>

        <div className="w-full">
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-w-full min-h-screen overflow-y-visible overflow-x-hidden bg-blue-50 flex flex-1 flex-col items-center font-primary">
      <title>ויצמן-שפר דיגיטל- העבודות שלנו</title>
      <meta
        name="description"
        content="דני קגנוביץ׳- אימונים ותזונה, הדבשת-עגלת קפה במדבר ועוד"
      />

      <link rel="canonical" href="/wsdigital/catalog" />
      <div className="w-full">
        <header>
          <Header />
        </header>
      </div>
      <div>
        <main className="w-[100vw] h-auto mx-2 flex rounded flex-col items-center my-5">
          <div className="grid gap-8">
            {data?.map((project: any, index: any) => (
              <WorkExample
                key={index}
                data={project}
                variant={(index + 1) % 2 === 0 ? "imageRight" : "imageLeft"}
              />
            ))}
          </div>
        </main>
      </div>

      <p className="text-blac text-xl lg:mb-5">
        אתר שיגרום לאנשים להגיד וואו, עלינו.
      </p>

      <div className="flex flex-row flex-1 p-5 lg:w-[98%] mb-3 rounded lg:bg-[#2d3031] justify-between items-center self-center">
        <ContactForm />
        {!isMobile && (
          <img src={deviceMockups} alt="" className="max-w-[50%]" />
        )}
      </div>

      <div className="w-full">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default WorkExamplesPage;
