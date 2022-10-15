import logo from "./logo.svg";
import "./App.css";
import Headers from "./component/Headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./component/Footer";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Categories from "./pages/Categories";
import Blogs from "./pages/Blogs";
import BlogCreate from "./pages/BlogCreate";
import CategoryCreate from "./pages/CategoryCreate";
import BlogUpdate from "./pages/BlogUpdate";
import CategoryUpdate from "./pages/CategoryUpdate";

import axios from "axios";

export default function App() {
  

  return (
    <>
      

      <Headers /> 

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/product" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-create" element={<BlogCreate />} />
          <Route path="/category-create" element={<CategoryCreate />} />
          <Route path="/blog-update/:id" element={<BlogUpdate />} />
          <Route path="/category-update/:id" element={<CategoryUpdate />} />
          <Route path="/category/:id" element={<CategoryUpdate/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}
