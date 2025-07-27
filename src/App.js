import './App.css';
import Nav from './Components/NavComponent/Nav';
import Footer from './Components/FooterComponent/Footer';
import Home from './Components/HomeComponent/Home';
import About from './Components/AboutComponent copy/About';
import Projects from './Components/ProjectComponent/Project';
import Resume from './Components/ResumeComponent/Resume';
import Contact from './Components/ContactComponent/Contact';
import Skills from './Components/SkillsComponent/Skills';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
      <Nav/>
      <Routes>
      <Route path="/" element={ <Home/>}></Route>
      <Route path="/about" element={ <About/>}></Route>
      <Route path="/resume" element={ <Resume/>}></Route>
      <Route path="/projects" element={ <Projects/>}></Route>
      <Route path="/contact" element={ <Contact/>}></Route>
      <Route path="/skills" element={ <Skills/>}></Route>
      </Routes>
      <Footer/>
   </>
  );
}

export default App;
