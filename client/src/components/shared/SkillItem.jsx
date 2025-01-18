import { fontColor } from "../../constants/cssVariables";

const SkillItem = ({ title, icon }) => {
  return (
    <li
      className={`skill-item text-[2rem] sm:text-[2.5rem] list-none text-${fontColor} no-underline`}
    >
      <abbr title={title} className="no-underline">
        <i className={icon}></i>
      </abbr>
    </li>
  );
};

export default SkillItem;
