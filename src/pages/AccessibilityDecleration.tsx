import Layout from "./Layout"; // import the Layout component

function AccessibilityDecleration() {
  return (
    <Layout
      title="ויצמן-שפר דיגיטל- הצהרת נגישות"
      description="הצהרת נגישות"
      canonicalUrl="/wsdigital/accessibility"
      bgColor="bg-blue-50"
    >
      <main className="w-[100vw] h-[100vh] mx-2 flex bg-slate-300 rounded flex-col items-center my-5">
        <div className="h-[100vh] w-[100vw] flex flex-1 flex-col justify-center items-center font-primary">
          <h1 className="text-4xl">עמוד הצהרת נגישות</h1>
        </div>
      </main>
    </Layout>
  );
}

export default AccessibilityDecleration;
