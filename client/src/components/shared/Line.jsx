import { fontColor } from "../../constants/cssVariables.js";

const Line = () => {
  return (
    <hr className={`bg-[${fontColor}] h-[2px] rounded-full mx-8 sm:mx-24`} />
  );
  // Have to put border-radius in className
};

export default Line;
