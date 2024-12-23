import { Link } from "react-scroll";
import { fontColor, fontNav } from "../../constants/cssVariables";

const NavItem = ({ title, to }) => {
  return (
    <li className="nav-items list-none cursor-pointer">
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-links hover-effect relative w-[100px] h-[100px] uppercase font-medium"
        style={{
          color: fontColor,
          fontSize: fontNav,
        }}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
