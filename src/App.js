import './App.css';
import About from './components/about/About';
import Contact from './components/contactme/Contact';
import Education from './components/education/Education';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
