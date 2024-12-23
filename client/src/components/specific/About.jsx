import Line from "../shared/Line";
import Breaker from "../shared/Breaker";
import { mySkills, mySocials } from "../../constants/myData";
import { fontColor } from "../../constants/cssVariables";
import SkillItem from "../shared/SkillItem";
import SocialItem from "../shared/SocialItem";

const About = () => {
  return (
    <div>
      <Line />
      <Breaker />

      <section id="about" className="about-section">
        <div className="about-container px-4 sm:px-24 flex items-center justify-center flex-col">
          <div className="about-content w-[76%] flex items-center justify-center flex-col gap-x-1">
            <h2 className="about-title text-center text-[2.5rem] mb-5 sm:mb-6 md:text-[2.75rem] font-medium">
              Meet Muhammad Saif
            </h2>
            <p className="about-description text-[1.25rem] md:text-[1.65rem] text-center">
              Passionate Full-Stack Web Developer specializing in the MERN
              stack. I excel at building modern, responsive, and efficient web
              applications. With expertise in JavaScript, data structures, and
              algorithms, I deliver clean, scalable code and solutions tailored
              to your needs. Let&apos;s turn your ideas into impactful digital
              experiences!
            </p>
            <div className="skills-container my-8 w-full flex items-center justify-around">
              <ul className="skill-list flex items-center justify-center gap-x-4">
                {mySkills.map((value, key) => {
                  const { title, icon } = value;

                  return <SkillItem key={key} title={title} icon={icon} />;
                })}
              </ul>
            </div>
            <div className="misc-container flex items-center justify-center flex-col sm:flex-row">
              <div className="education-content text-[0.7rem] font-medium uppercase sm:text-[1.15rem]">
                <i className="ri-graduation-cap-fill text-[1.75rem] mr-2"></i>{" "}
                Software Engg. Student @UOS
              </div>
              <span
                className={`v-line bg-[${fontColor}] h-[2rem] w-[1.5px] mx-7`}
              ></span>
              <ul className="social-list flex items-center justify-center list-none gap-x-7">
                {mySocials.map((value, key) => {
                  const { link, icon } = value;

                  return <SocialItem key={key} link={link} icon={icon} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Breaker />
      <Line />
    </div>
  );
};

export default About;
