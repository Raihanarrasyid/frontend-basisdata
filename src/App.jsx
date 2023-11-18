import "./App.css";
import Header from "./components/public/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRestaurantStore } from "./stores/appStore";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import PesanMakanan from "./components/PesanMakanan/PesanMakanan";
import { useEffect } from "react";

import axios from "axios";
import DetailMakanan from "./components/PesanMakanan/DetailMakanan";
import Cart from "./components/PesanMakanan/Cart";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<PesanMakanan />} />
          <Route path="/order/:menuId" element={<DetailMakanan />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
