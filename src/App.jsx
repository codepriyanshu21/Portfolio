// App.jsx
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans text-white bg-gray-900 min-h-screen">
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}