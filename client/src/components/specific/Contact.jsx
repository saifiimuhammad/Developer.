import { Link } from "react-router-dom";
import { documentTitleChangeHandler } from "../../utilities/utility";
import NavItem from "../shared/NavItem";
import SocialItem from "../shared/SocialItem";
import Watermark from "../shared/Watermark";
import { fontColor } from "../../constants/cssVariables";
import { mySocials } from "../../constants/myData";

const footerLinks = [
  {
    title: "projects",
    to: "projects",
  },
  {
    title: "about me",
    to: "about",
  },
];

const Contact = () => {
  return (
    <div>
      <section id="contact-section" className="contact-section">
        <div className="contact-container mx-8 sm:mx-24 flex items-center justify-center flex-col gap-y-28">
          <div className="contact-content flex items-center justify-center flex-col gap-y-10">
            <h1 className="contact-title text-[3.25rem] text-center font-medium sm:text-[4.25rem]">
              Let&apos;s work together
            </h1>
            <Link
              to="/workwithme"
              className={`contact-btn btn bg-[${fontColor}] text-white font-medium uppercase transition-all duration-300 hover:bg-white hover:text-[${fontColor}] transition-all duration-300`}
              onClick={documentTitleChangeHandler}
            >
              Work with me
            </Link>
          </div>

          <div className="footer-content flex items-center justify-center flex-col">
            <ul className="nav-menu md:static absolute top-[-600%] left-0 flex items-center justify-between flex-col md:flex-row w-full h-[280px] bg-[#fff] py-4 border-b border-[#c4c4c4] transition duration-500 ease-in-out gap-y-10 md:gap-x-10 md:w-max md:h-max">
              {footerLinks.map((value, key) => {
                const { title, to } = value;
                return <NavItem key={key} title={title} to={to} />;
              })}
              <li className="nav-items list-none cursor-pointer">
                <Link
                  to="/workwithme"
                  className="nav-links hover-effect relative w-[120px] h-[100px] uppercase font-medium"
                  onClick={documentTitleChangeHandler}
                >
                  Work with me
                </Link>
              </li>
            </ul>

            <ul className="social-list social-footer flex items-center justify-center gap-x-7 list-none mt-6 mb-8">
              {mySocials.map((value, key) => {
                const { link, icon } = value;

                return <SocialItem key={key} link={link} icon={icon} />;
              })}
            </ul>

            <Watermark />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
