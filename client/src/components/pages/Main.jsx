import Breaker from "../shared/Breaker";
import Home from "../specific/Home";
import InfiniteMarquee from "../shared/InfiniteMarquee";
import Projects from "../specific/Projects";
import About from "../specific/About";
import Contact from "../specific/Contact";

const Main = () => {
  return (
    <>
      <Breaker />
      <Home />
      <Breaker />
      <InfiniteMarquee />
      <Breaker />
      <Projects />
      <Breaker />
      <About />
      <Breaker space={"10rem"} />
      <Contact />
      <Breaker space={"10rem"} />
    </>
  );
};

export default Main;
