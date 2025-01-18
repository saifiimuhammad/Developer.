import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, tools, link }) => {
  useEffect(() => {
    let projElements = document.querySelectorAll(".project-item");

    projElements.forEach((element) => {
      element.addEventListener("mousemove", () => {
        element.lastElementChild.classList.add("hover-project");
      });
    });
    projElements.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        element.lastElementChild.classList.remove("hover-project");
      });
    });
  }, []);

  return (
    <Link
      to={link}
      target="_blank"
      className="project-item relative flex items-center justify-between transition duration-300 ease-in text-[#131313] hover:opacity-70 hover:transition hover:duration-300 hover:ease-out"
    >
      <div className="item-content w-full flex items-start justify-center flex-col gap-y-4 opacity-100">
        <h2 className="item-title text-[2.75rem] font-medium sm:text-[4rem]">
          {title}
        </h2>
        <span className="item-tools flex items-center justify-center text-[1.75rem] gap-x-6">
          {tools}
        </span>
      </div>
      <i className="ri-arrow-drop-right-line hidden sm:inline-block absolute top-[4%] right-[4%] z-50 text-[6rem] transition-all duration-300 ease-linear"></i>
    </Link>

    // Have to put an arrow icon
  );
};

export default ProjectItem;
