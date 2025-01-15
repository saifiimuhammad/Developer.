import { useNavigate } from "react-router-dom";

import FormItem from "../shared/FormItem";

const fields = [
  {
    title: "Username",
    name: "username",
    type: "text",
  },
  {
    title: "Password",
    name: "password",
    type: "password",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.preventDefault();

    navigate("/admin/dashboard");
  };

  return (
    <div className="login-container w-full h-screen px-4 md:px-24 grid place-items-center">
      <div className="login-content w-1/2">
        <h2 className="login-title text-4xl font-medium flex items-center justify-center flex-col">
          Admin
        </h2>
        <form action="" className="login-form grid gap-y-4">
          {fields.map((value, key) => {
            const { title, name, type } = value;

            return <FormItem key={key} title={title} name={name} type={type} />;
          })}

          <div className="btn-container w-full flex justify-center">
            <input
              type="submit"
              value="Login"
              className="submit-btn btn text-[1rem] font-medium cursor-pointer bg-white"
              onClick={handleOnClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
