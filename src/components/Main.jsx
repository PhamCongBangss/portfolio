import { Element } from "react-scroll";
import Hero from "./Hero";
import Nav from "./nav";
import Projects from "./Projects";
import Skills from "./Skills";

function Main() {
  return (
    <div className="bg-[#222629]">
      <Nav />
      <Hero />
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
}

export default Main;
