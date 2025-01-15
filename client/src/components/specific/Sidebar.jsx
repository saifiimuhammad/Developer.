import SidebarItem from "../shared/SidebarItem";

const Sidebar = ({ title, sidebarLinks }) => {
  return (
    <aside className="sidebar w-[25%] h-screen border border-solid border-[#ededed]">
      <div className="sidebar-logo w-full grid place-items-center h-[80px]">
        <h1 className="sidebar-title text-2xl font-medium">{title}</h1>
      </div>
      <div className="sidebar-menu w-full mt-8">
        <ul className="sidebar-nav px-0 md:px-12 flex items-center justify-center flex-col gap-y-4">
          {sidebarLinks.map((value, key) => {
            const { title, link } = value;
            return <SidebarItem key={key} title={title} link={link} />;
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
