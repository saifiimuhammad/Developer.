import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/specific/Navbar";
import Main from "./components/pages/Main";
import ContactForm from "./components/pages/ContactForm";

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

const App = () => {
  return (
    <Router>
      <div className="main relative w-full overflow-hidden">
        <Navbar navLinks={navLinks} />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/workwithme" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
