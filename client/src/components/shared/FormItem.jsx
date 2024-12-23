import { fontColor } from "../../constants/cssVariables.js";

const FormItem = ({ title, name, type }) => {
  return (
    <div className="input-container w-full flex items-start justify-center flex-col gap-y-1">
      <label
        htmlFor={name}
        className="label text-[1rem] font-medium text-[#4e4e4e]"
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        className={`input w-full h-[40px] border border-solid border-[#b5b5b5] rounded-[5px] text-[${fontColor}] text-[1.05rem] font-medium py-6 px-4`}
        required
      />
    </div>
  );
};

export default FormItem;
