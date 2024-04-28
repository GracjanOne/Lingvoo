import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./views/Root.jsx";
import "./index.css";
import About from "./views/AboutProduct.jsx";
import Tester from "./views/BecomeTester.jsx";
import Law from "./views/Law.jsx";
import Contact from "./views/Contact.jsx";
import ScrollToTop from "./ScrollToTop.js";
export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="o-produkcie" element={<About />} />
        <Route path="zostan-testerem" element={<Tester />} />
        <Route path="informacje-prawne" element={<Law />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
