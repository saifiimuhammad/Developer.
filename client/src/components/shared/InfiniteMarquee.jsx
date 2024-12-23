import { useEffect, useRef } from "react";
import gsap from "gsap";
import { horizontalLoop } from "../../utilities/utility.js";

const InfiniteMarquee = () => {
  const stripe = useRef(null);

  useEffect(() => {
    let elems = gsap.utils.toArray(".elem");
    horizontalLoop(elems, { paused: false, repeat: -1 });
    stripe.current.addEventListener("mousemove", handleMove);
    stripe.current.addEventListener("mouseleave", handleLeave);
  }, []);

  const handleMove = () => {
    document.querySelector(".cnt2").classList.add("hover-marquee-cnt2");
    document.querySelector(".cnt").classList.add("hover-marquee-cnt");
  };

  const handleLeave = () => {
    document.querySelector(".cnt2").classList.remove("hover-marquee-cnt2");
    document.querySelector(".cnt").classList.remove("hover-marquee-cnt");
  };

  return (
    <div ref={stripe} id="stripe" className="stripe">
      <div className="cnt2">
        <div className="elem elem2">
          Frontend Developer Crafting Modern Websites
        </div>
        <span className="elem elem2 dot">•</span>
        <div className="elem elem2">JavaScript Developer</div>
        <span className="elem elem2 dot">•</span>
        <div className="elem elem2">
          Frontend Developer Crafting Modern Websites
        </div>
        <span className="elem elem2 dot">•</span>
        <div className="elem elem2">JavaScript Developer</div>
        <span className="elem elem2 dot">•</span>
        <div className="elem elem2">Elevating Ideas, Transforming Code</div>
        <span className="elem elem2 dot">•</span>
      </div>
      <div className="cnt">
        <div className="elem">Frontend Developer Crafting Modern Websites</div>
        <span className="elem dot">•</span>
        <div className="elem">JavaScript Developer</div>
        <span className="elem dot">•</span>
        <div className="elem">Frontend Developer Crafting Modern Websites</div>
        <span className="elem dot">•</span>
        <div className="elem">JavaScript Developer</div>
        <span className="elem dot">•</span>
        <div className="elem">Elevating Ideas, Transforming Code</div>
        <span className="elem dot">•</span>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
