import { useNavigate } from "react-router-dom";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-w-full min-h-screen overflow-y-auto overflow-x-hidden bg-blue-50 flex flex-1 flex-col items-center font-primary">
      <div>
        <header>
          <Header />
        </header>
      </div>

      <div>
        <main className="w-[100vw] h-[100vh] mx-2 flex bg-slate-300 rounded flex-col items-center my-5">
          <div className="h-[100vh] w-[100vw] flex flex-1 flex-col justify-center items-center font-primary">
            <h1 className="text-4xl">שגיאה 404- עמוד לא נמצא.</h1>
            <p>העמוד שאתה מחפש לא קיים או שמיקומו שונה.</p>

            <button
              onClick={() => navigate("/wsdigital/home")}
              className="bg-black text-white px-3 py-1 rounded mt-10 active:bg-white active:text-black hover:scale-110 transition active:duration-74 ease-in-out"
            >
              לדף הבית
            </button>
          </div>
        </main>
      </div>

      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default PageNotFound;
