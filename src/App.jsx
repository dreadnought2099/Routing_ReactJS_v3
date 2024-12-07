import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Layouts
import Layout from "./components/layouts/index";

//Import Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
