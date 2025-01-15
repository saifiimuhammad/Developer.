import Sidebar from "../specific/Sidebar";

const sidebarLinks = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    title: "Projects",
    link: "/admin/projects",
  },
  {
    title: "Insights",
    link: "/admin/insights",
  },
  {
    title: "Settings",
    link: "/admin/settings",
  },
];

const AdminLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center justify-between">
      <Sidebar title={"Admin Panel"} sidebarLinks={sidebarLinks} />

      <section className="section w-[75%] h-screen">{children}</section>
    </div>
  );
};

export default AdminLayout;
