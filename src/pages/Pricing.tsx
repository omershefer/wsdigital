import Layout from "./Layout"; // Import the Layout component

function PricingPage() {
  return (
    <Layout
      title="ויצמן-שפר דיגיטל- מחירים"
      description="דף נחיתה-1400-2000 ש״ח. אתר תדמית- 2500-3000 ש״ח. כולל עיצוב ואחזקה בחודש הראשון."
      canonicalUrl="/wsdigital/pricing"
      bgColor="bg-blue-50"
    >
      <main className="w-[100vw] h-[100vh] mx-2 flex bg-slate-300 rounded flex-col items-center my-5">
        <div className="h-[100vh] w-[100vw] flex flex-1 flex-col justify-center items-center font-primary">
          <h1 className="text-4xl">עמוד מחירים</h1>
        </div>
      </main>
    </Layout>
  );
}

export default PricingPage;
