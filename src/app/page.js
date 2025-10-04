import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
      </main>
    </div>
  );
}
