import AdminLayout from "../layout/AdminLayout";
import { projects } from "../../constants/myData.js";

const ProjectsManagement = () => {
  const handleEdit = () => {
    console.log("edit");
  };
  const handleDelete = () => {
    console.log("delete");
  };

  const handleProjectsDialog = () => {};

  return (
    <AdminLayout>
      <div className="projects-section w-full h-screen px-4">
        <div className="projects-container flex items-center justify-between w-full px-10 py-4 border-solid border-t-0 border-r-0 border-l-0 border-b border-b-[#ededed]">
          <div className="projects-title w-full">
            <h1 className="font-medium text-2xl">Projects Management</h1>
            <p>Here you can manage your projects.</p>
          </div>
          <div className="add-projects">
            <button
              className="btn text-white bg-[#131313] transition duration-300 uppercase font-medium hover:text-[#131313] hover:bg-white hover:transition hover:duration-300 flex items-center justify-center w-[13rem]"
              onClick={handleProjectsDialog}
            >
              <i className="ri-add-large-line mr-2"></i> Add Projects
            </button>
          </div>
        </div>
        <div className="projects-content px-10 py-4 h-screen">
          <h3 className="text-xl font-light text-gray-500">My Projects</h3>
          <ul className="projects-list my-8 flex items-center justify-between flex-col gap-y-4 max-h-[500px] overflow-y-scroll">
            {projects.map((value, key) => {
              const { title, tools, link } = value;
              return (
                <div
                  key={key}
                  className="w-full flex items-center justify-between h-20"
                >
                  <div className="flex items-center justify-between w-[30rem]">
                    <div className="">
                      <h5 className="text-lg font-medium">{title}</h5>
                      <p className="text-gray-400 font-light">{tools}</p>
                    </div>
                    <a href={link} className="ml-4 text-blue-400">
                      <i className="ri-link"></i> Link to Github
                    </a>
                  </div>
                  <div key={key} className="flex items-center gap-x-6">
                    <i
                      className="ri-edit-box-line text-[1.5rem] text-green-500 cursor-pointer"
                      onClick={handleEdit}
                    ></i>
                    <i
                      className="ri-delete-bin-6-line text-[1.5rem] text-red-500 cursor-pointer"
                      onClick={handleDelete}
                    ></i>
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
