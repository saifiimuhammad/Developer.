import { Link } from "react-router-dom";

const SidebarItem = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="sidebar-nav-link  w-full text-center p-4 uppercase hover:bg-[#202020] hover:text-white transition-all duration-300 hover:transition-all hover:duration-300 rounded-full"
    >
      <li className="sidebar-nav-ite">{title}</li>
    </Link>
  );
};

export default SidebarItem;
