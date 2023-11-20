import "./App.css";
import Header from "./components/public/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import PesanMakanan from "./components/PesanMakanan/PesanMakanan";

import DetailMakanan from "./components/PesanMakanan/DetailMakanan";
import Cart from "./components/PesanMakanan/Cart";
import FormPesanan from "./components/Form/FormPesanan";
import Dashboard from "./components/Admin/Dashboard";

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
          <Route path="/form" element={<FormPesanan />} />
          <Route path="/manageorder" element={<h1>Manage Order</h1>} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
