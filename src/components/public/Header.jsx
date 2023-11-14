import React from "react";
import { Box } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.webp";

export default function Header() {
  return (
    <header className="bg-sky-50">
      <nav className="w-11/12 max-w-7xl mx-auto">
        <Box className="flex items-center justify-between p-2 bg-sky-50">
          <a href="/">
            <Box className="flex gap-2 text-sky-700 items-center justify-evenly cursor-pointer">
              <Avatar src={logo} alt="logo" sx={{ width: 56, height: 56 }} />
              <Typography variant="h6">Manganly</Typography>
            </Box>
          </a>
          <Box className="flex justify-evenly gap-5 mx-2 items-center text-sky-700">
            <Typography
              className="p-1 border-b-2 border-sky-500 cursor-pointer"
              component="a"
              href="#"
            >
              Daftar Menu
            </Typography>
            <Typography
              className="p-1 border-b-2 border-sky-500 cursor-pointer"
              component="a"
              href="#"
            >
              Tentang Kami
            </Typography>
            <Typography
              className="p-1 border-b-2 border-sky-500  cursor-pointer"
              component="a"
              href="#"
            >
              Reservasi
            </Typography>
            <Button variant="contained">Pesanan</Button>
          </Box>
        </Box>
      </nav>
    </header>
  );
}
