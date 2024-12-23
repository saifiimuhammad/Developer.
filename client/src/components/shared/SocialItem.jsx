import { Link } from "react-router-dom";
import { fontColor } from "../../constants/cssVariables";

const SocialItem = ({ link, icon }) => {
  return (
    <li className="social-item">
      <Link
        target="_blank"
        to={link}
        className={`social-link text-[1.5rem] text-[${fontColor}] hover:text-[#4d4d4d] transition-all duration-300 ease-in-out`}
      >
        <i className={icon}></i>
      </Link>
    </li>
  );
};

export default SocialItem;
