import { Fragment } from "react";

import Title from "../shared/Title";
import { projects } from "../../constants/myData.js";
import ProjectItem from "../shared/ProjectItem";
import Breaker from "../shared/Breaker.jsx";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container mx-[2rem] sm:mx-[6rem]">
        <Title value={"Projects"} />
        <div className="projects-content w-full">
          {projects.map((value, key) => {
            const { title, tools, link } = value;

            return (
              <Fragment key={key}>
                <ProjectItem title={title} tools={tools} link={link} />
                <Breaker />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
