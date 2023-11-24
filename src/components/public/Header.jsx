import React from "react";
import { Box } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { useRestaurantStore } from "../../stores/appStore";
import { useEffect } from "react";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const store = useRestaurantStore();
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/menu/all`).then((res) => {
      store.setMenus(res.data);
    });
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
            {/* <Typography
              className="p-1 border-b-2 border-sky-500 cursor-pointer"
              component="a"
              onClick={() => navigate("/about")}
            >
              Tentang Kami
            </Typography> */}
            <Typography
              className="p-1 border-b-2 border-sky-500 cursor-pointer"
              component="a"
              onClick={() => navigate("/cart")}
            >
              Keranjang
            </Typography>
            <Button variant="contained" onClick={() => navigate("/pesanan")}>
              Pesanan
            </Button>
          </Box>
        </Box>
      </nav>
    </header>
  );
}
