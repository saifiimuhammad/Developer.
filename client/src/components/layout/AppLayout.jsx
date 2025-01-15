import Navbar from "../specific/Navbar";

const navLinks = [
  {
    title: "projects",
    to: "projects",
  },
  {
    title: "about me",
    to: "about",
  },
];

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar navLinks={navLinks} />
      {children}
    </>
  );
};

export default AppLayout;
