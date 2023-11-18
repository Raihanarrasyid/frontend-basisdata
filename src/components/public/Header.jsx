import React from "react";
import { Box } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { useRestaurantStore } from "../../stores/appStore";
import { useEffect } from "react";

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

export default function Header() {
  const navigate = useNavigate();
  const store = useRestaurantStore();
  useEffect(() => {
    // axios.get(`http://127.0.0.1:3001/menu/all`).then((res) => {
    //   store.setMenus(res.data);
    // });
    store.setMenus(items);
  }, []);
  return (
    <header className="bg-sky-50">
      <nav className="w-11/12 max-w-7xl mx-auto">
        <Box className="flex items-center justify-between p-2 bg-sky-50">
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            <Box className="flex gap-2 text-sky-700 items-center justify-evenly cursor-pointer">
              <Avatar src={logo} alt="logo" sx={{ width: 56, height: 56 }} />
              <Typography variant="h6">Manganly</Typography>
            </Box>
          </a>
          <Box className="flex justify-evenly gap-5 mx-2 items-center text-sky-700">
            <Typography
              className="p-1 border-b-2 border-sky-500 cursor-pointer"
              component="a"
              onClick={() => navigate("/order")}
            >
              Pesan Makanan
            </Typography>
            <Typography
              className="p-1 border-b-2 border-sky-500 cursor-pointer"
              component="a"
              onClick={() => navigate("/about")}
            >
              Tentang Kami
            </Typography>
            <Typography
              className="p-1 border-b-2 border-sky-500 cursor-pointer"
              component="a"
              onClick={() => navigate("/cart")}
            >
              Keranjang
            </Typography>
            <Button variant="contained">Pesanan</Button>
          </Box>
        </Box>
      </nav>
    </header>
  );
}
