import "./styles/theme.css";
import "./App.css";

import CursorGlow from "./components/common/CursorGlow";
import AuroraBackground from "./components/common/AuroraBackground";
import ScrollProgressBar from "./components/common/ScrollProgressBar";
import BackToTop from "./components/common/BackToTop";

import Navbar from "./components/sections/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Experience from "./components/sections/Experience/Experience";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Certifications from "./components/sections/Certifications/Certifications";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";

function App() {
  return (
    <>
      <AuroraBackground />
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
