import { useState } from "react";

const ProjectDialog = ({ open }) => {
  let isOpen = open;
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    link: "",
    technologies: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project added:", projectData);
    isOpen = false;
    setProjectData({ title: "", description: "", link: "", technologies: "" });
  };

  const handleClose = () => {
    isOpen = false;
  };

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Add New Project</h2>
              <button
                onClick={handleClose}
                className="text-gray-600 hover:text-gray-900"
              >
                <i className="ri-close-large-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={projectData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Project Link</label>
                <input
                  type="url"
                  name="link"
                  value={projectData.link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Technologies</label>
                <input
                  type="text"
                  name="technologies"
                  value={projectData.technologies}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
                  placeholder="e.g., React, Node.js"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="btn bg-white text-[#131313] transition duration-300 uppercase font-medium hover:text-[#131313] hover:bg-white hover:transition hover:duration-300"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className="btn text-white bg-[#131313] transition duration-300 uppercase font-medium hover:text-[#131313] hover:bg-white hover:transition hover:duration-300"
                  type="submit"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDialog;
