import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home.jsx";
import Services from "@/pages/services.jsx";
import Projects from "@/pages/projects.jsx";
import Contact from "@/pages/contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;