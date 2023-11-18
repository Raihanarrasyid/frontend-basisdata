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

const items = [
  {
    id_menu: 1,
    nama_menu: "Nasi Goreng",
    linkFoto:
      "https://cdn1-production-images-kly.akamaized.net/C84FgHuetKDIc1agT4IPljynG3k=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg",
    deskripsi: "nasi goreng pake marimas anggur",
    kategori: "Makanan",
    harga: 12000,
  },
  {
    id_menu: 2,
    nama_menu: "Sate Ayam",
    linkFoto:
      "https://www.blibli.com/friends-backend/wp-content/uploads/2023/04/B300045-Cover-resep-sate-ayam.jpg",
    deskripsi: "pake telor dadar",
    kategori: "Makanan",
    harga: 15000,
  },
  {
    id_menu: 3,
    nama_menu: "Mie Goreng",
    linkFoto:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/08/01045246/ini-resep-mie-goreng-dengan-bahan-sederhana-yang-menggugah-selera-halodoc.jpg.webp",
    deskripsi: "pake tempe",
    kategori: "Makanan",
    harga: 15000,
  },
  {
    id_menu: 4,
    nama_menu: "Bubur Ayam",
    linkFoto:
      "https://www.masakapahariini.com/wp-content/uploads/2023/06/shutterstock_1927030937.jpg",
    deskripsi: "harus diaduk",
    kategori: "Makanan",
    harga: 8000,
  },
  {
    id_menu: 5,
    nama_menu: "Cilok",
    linkFoto:
      "https://cdn0-production-images-kly.akamaized.net/OBneEUAQirmpXtpArNP01qdJofY=/0x284:903x793/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3384331/original/092840500_1614053572-shutterstock_1791558536.jpg",
    deskripsi: "just regular cilok",
    kategori: "Makanan",
    harga: 10000,
  },
  {
    id_menu: 6,
    nama_menu: "Seblak",
    linkFoto:
      "https://cdn0-production-images-kly.akamaized.net/cbp0BOLrAbVALBYj5Nbq_-uMIzc=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3158121/original/075304800_1592646451-unnamed.jpg",
    deskripsi: "maw seblak",
    kategori: "Makanan",
    harga: 20000,
  },
];

function App() {
  const store = useRestaurantStore();
  useEffect(() => {
    // axios.get(`http://127.0.0.1:3001/menu/all`).then((res) => {
    //   store.setMenus(res.data);
    // });
    store.setMenus(items);
    console.log(store.menus);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<PesanMakanan />} />
          <Route path="/order/:menuId" element={<DetailMakanan />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
