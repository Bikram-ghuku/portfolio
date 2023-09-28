import './App.css';
import About from './components/about/About';
import Contact from './components/contactme/Contact';
import Education from './components/education/Education';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Education />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
