import { Link } from "react-router-dom";

import { documentTitleChangeHandler } from "../../utilities/utility";
import img from "../../assets/images/pic.jpg";
import { container } from "../../constants/cssVariables";

const Home = () => {
  return (
    <section id="home-section" className="home-section pt-0 sm:pt-24">
      <div className={`${container} home-container`}>
        <div className="home-content h-[390px] flex justify-between items-center flex-col-reverse sm:flex-row sm:h-[350px]">
          <div className="home-introduction w-full sm:w-1/2 md:w-[55%] gap-y-5 flex flex-col justify-center items-center sm:items-start">
            <span className="home-description text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] text-center sm:text-left">
              <strong>Hi there!</strong> I&apos;m <strong>Muhammad Saif</strong>
              , a MERN Stack Developer creating modern, user-friendly web
              applications that leave a lasting impression.
            </span>
            <Link
              to="/workwithme"
              className="home-btn btn text-white bg-[#131313] transition duration-300 uppercase font-medium hover:text-[#131313] hover:bg-white hover:transition hover:duration-300"
              onClick={documentTitleChangeHandler}
            >
              Let&apos;s Connect
            </Link>
          </div>
          <div className="home-image">
            <img
              src={img}
              alt=""
              className="home-img w-[180px] sm:w-[300px] sm:hover:w-[350px] hover:w-[180px] transition-all duration-300  hover:transition-all hover:duration-300"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
