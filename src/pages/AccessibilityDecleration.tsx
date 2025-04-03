import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

function AccessibilityDecleration() {
  return (
    <div className="min-w-full min-h-screen overflow-y-auto overflow-x-hidden bg-blue-50 flex flex-1 flex-col items-center font-primary">
      <title>ויצמן-שפר דיגיטל- הצהרת נגישות</title>
      <meta name="description" content="הצהרת נגישות" />

      <link rel="canonical" href="/wsdigital/accessibility" />
      <div className="w-full">
        <header>
          <Header />
        </header>
      </div>
      <div>
        <main className="w-[100vw] h-[100vh] mx-2 flex bg-slate-300 rounded flex-col items-center my-5">
          <div className="h-[100vh] w-[100vw]  flex flex-1 flex-col justify-center items-center font-primary">
            <h1 className="text-4xl">עמוד הצהרת נגישות</h1>
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

export default AccessibilityDecleration;
