import Layout from "./Layout"; // Import Layout component
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
      <Layout
        title="ויצמן-שפר דיגיטל- העבודות שלנו"
        description="דני קגנוביץ׳- אימונים ותזונה, הדבשת-עגלת קפה במדבר ועוד"
        canonicalUrl="/wsdigital/catalog"
        bgColor="bg-blue-50"
      >
        <main className="w-[100vw] h-auto mx-2 flex rounded flex-col items-center my-5">
          <div className="grid gap-8">
            <WorkExample loading={true} />
            <WorkExample loading={true} />
          </div>
        </main>

        <p className="text-blac text-xl lg:mb-5">
          אתר שיגרום לאנשים להגיד וואו, עלינו.
        </p>

        <div className="flex flex-row flex-1 p-5 lg:w-[98%] mb-3 rounded lg:bg-[#2d3031] justify-between items-center self-center">
          <ContactForm />
          {!isMobile && (
            <img
              src={deviceMockups}
              alt="Device Mockups"
              className="max-w-[50%]"
            />
          )}
        </div>
      </Layout>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout
      title="ויצמן-שפר דיגיטל- העבודות שלנו"
      description="דני קגנוביץ׳- אימונים ותזונה, הדבשת-עגלת קפה במדבר ועוד"
      canonicalUrl="/wsdigital/catalog"
      bgColor="bg-blue-50"
    >
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

      <p className="text-blac text-xl lg:mb-5">
        אתר שיגרום לאנשים להגיד וואו, עלינו.
      </p>

      <div className="flex flex-row flex-1 p-5 lg:w-[98%] mb-3 rounded lg:bg-[#2d3031] justify-between items-center self-center">
        <ContactForm />
        {!isMobile && (
          <img
            src={deviceMockups}
            alt="Device Mockups"
            className="max-w-[50%]"
          />
        )}
      </div>
    </Layout>
  );
}

export default WorkExamplesPage;
