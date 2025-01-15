import AdminLayout from "../layout/AdminLayout";
import { projects } from "../../constants/myData.js";

const ProjectsManagement = () => {
  return (
    <AdminLayout>
      <span className="add-projects absolute bottom-20 right-12">
        <a href="" className="py-4 px-6 bg-slate-800 text-white rounded-full">
          Add Projects
        </a>
      </span>
      <div className="projects-section w-full h-screen px-4">
        <div className="projects-title w-full px-10 py-4 border-solid border-t-0 border-r-0 border-l-0 border-b border-b-[#ededed]">
          <h1 className="font-medium text-2xl">Projects Management</h1>
          <p>Here you can manage your projects.</p>
        </div>
        <div className="projects-content px-10 py-4">
          <h3 className="text-xl font-light text-gray-500">My Projects</h3>
          <ul className="projects-list my-8 flex items-center justify-between flex-col gap-y-4">
            {projects.map((value, key) => {
              const { title, tools, link } = value;
              return (
                <div
                  key={key}
                  className="w-full flex items-center justify-between h-20"
                >
                  <div className="flex items-center justify-between w-96">
                    <div className="">
                      <h5 className="text-lg font-medium">{title}</h5>
                      <p className="text-gray-400 font-light">{tools}</p>
                    </div>
                    <a href={link} className="text-blue-400 underline">
                      Link
                    </a>
                  </div>
                  <div key={key} className="flex items-center gap-x-4">
                    <i>edit</i>
                    <i>delete</i>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProjectsManagement;
