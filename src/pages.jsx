import { useEffect, useRef } from "react";
import { bootSiteRuntime } from "./site-runtime.js";
import Header from "./components/Header.jsx";
import Header2 from "./components/Header2.jsx";
import Section from "./components/Section.jsx";
import Services from "./components/Services.jsx";
import Works from "./components/Works.jsx";
import About from "./components/About.jsx";
import Section2 from "./components/Section2.jsx";
import Section3 from "./components/Section3.jsx";
import Faq from "./components/Faq.jsx";
import Section4 from "./components/Section4.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export const pages = {
  "/": { component: Home, title: "NEXUSBERT — Intelligence, engineered." },
};

let HomeHasRun = false;
function Home() {
  const initRef = useRef(false);
  useEffect(() => {
    // Guard against React 18 StrictMode double-invoke in development
    if (initRef.current) return;
    const isDev =
      typeof process !== "undefined" &&
      process.env &&
      process.env.NODE_ENV === "development";
    if (isDev && HomeHasRun) return;
    initRef.current = true;
    HomeHasRun = true;
    bootSiteRuntime();
  }, []);
  return (
    <>
      <Header />
      <Header2 />
      <Section />
      <Services />
      <Works />
      <About />
      <Section2 />
      <Section3 />
      <Faq />
      <Section4 />
      <Contact />
      <Footer />
    </>
  );
}
