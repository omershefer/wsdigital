import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { init } from "@emailjs/browser";
import "./App.css";

// import scrolling component
import ScrollToTopOnRouteChange from "./components/general/ScrollToTopOnRouterChange";

// Import page components
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import AccessibilityDecleration from "./pages/AccessibilityDecleration";
import Pricing from "./pages/Pricing";
import Contactpage from "./pages/ContactPage";
import WorkExamples from "./pages/WorkExamples";

function App() {
  const urlBase = "/wsdigital"
  init("Osm30QnSHmceSTNsD");
  return (
    <BrowserRouter>
      <div className="w-full h-full">
        <ScrollToTopOnRouteChange />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={`${urlBase}/home`} element={<Home />} />
            <Route
              path={`${urlBase}`}
              element={<Navigate to={`${urlBase}/home`} replace />}
            />
            <Route
              path={`${urlBase}/`}
              element={<Navigate to={`${urlBase}/home`} replace />}
            />
            <Route
              path={`/`}
              element={<Navigate to={`${urlBase}/home`} replace />}
            />
            <Route path={`${urlBase}/aboutus`} element={<AboutUs />} />
            <Route path={`${urlBase}/contact`} element={<Contactpage />} />
            <Route
              path="/accessibility"
              element={<AccessibilityDecleration />}
            />
            <Route path={`${urlBase}/pricing`} element={<Pricing />} />
            <Route path={`${urlBase}/catalog`} element={<WorkExamples />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
