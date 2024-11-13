import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
