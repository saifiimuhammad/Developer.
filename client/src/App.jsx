import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import ContactForm from "./components/pages/ContactForm";
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import ProjectsManagement from "./components/admin/ProjectsManagement";

const App = () => {
  return (
    <Router>
      <div className="main relative w-full overflow-hidden">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/workwithme" element={<ContactForm />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/projects" element={<ProjectsManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
