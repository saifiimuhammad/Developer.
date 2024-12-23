import { fontColor } from "../../constants/cssVariables";
import FormItem from "../shared/FormItem";

const fields = [
  {
    title: "Full Name",
    name: "full-name",
    type: "text",
  },
  {
    title: "Email",
    name: "email",
    type: "email",
  },
  {
    title: "Subject",
    name: "subject",
    type: "text",
  },
];

const Form = () => {
  return (
    <form
      action="/work-with-me"
      className="form px-6 py-8 flex items-start justify-center flex-col gap-y-5 w-full border border-solid border-[#aaaaaa] rounded-[10px] sm:px-12 md:px-32"
    >
      {fields.map((value, key) => {
        return (
          <FormItem
            key={key}
            title={value.title}
            name={value.name}
            type={value.type}
          />
        );
      })}

      <div className="input-container w-full flex items-start justify-center flex-col gap-y-1">
        <label
          htmlFor="messsage"
          className="label text-[1rem] font-medium text-[#4e4e4e]"
        >
          Message
        </label>
        <textarea
          name="message"
          className={`input w-full h-[200px] border border-solid border-[#b5b5b5] rounded-[5px] text-[${fontColor}] text-[1.05rem] font-medium py-6 px-4 resize-none`}
          required
        ></textarea>
      </div>

      <div className="btn-container w-full flex justify-center">
        <input
          type="submit"
          value="Send"
          className="submit-btn btn text-[1rem] font-medium cursor-pointer bg-white"
        />
        {/* We just have to give the onClick listener */}
      </div>
    </form>
  );
};

export default Form;
