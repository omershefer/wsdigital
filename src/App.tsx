import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { init } from "@emailjs/browser";
import "./App.css";
import ScrollToTopOnRouteChange from "./components/general/ScrollToTopOnRouterChange";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import AccessibilityDecleration from "./pages/AccessibilityDecleration";
import Pricing from "./pages/Pricing";
import Contactpage from "./pages/ContactPage";
import WorkExamples from "./pages/WorkExamples";

function App() {
  init("Osm30QnSHmceSTNsD");

  return (
    <HashRouter>
      <div className="w-full lg:max-w-[40cm] overflow-x-hidden h-full">
        <ScrollToTopOnRouteChange />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route
              path="/accessibility"
              element={<AccessibilityDecleration />}
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/catalog" element={<WorkExamples />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default App;
