import {
  Button,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

export default function Pesanan() {
  const [id, setId] = useState("");
  const [nomor_telp, setNomor_telp] = useState("");
  const [hasil, setHasil] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  async function handleSubmit() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/pesanan/${id}`
      );
      setHasil(response.data);
      setShowOverlay(true);
      animateScroll.scrollToBottom();
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data:", error);
    }
  }

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <Box className="w-4/5 mx-auto mt-10" data-aos="zoom-in">
      <Card className="flex">
        <CardMedia
          component="img"
          sx={{ width: "50%", filter: "brightness(70%)" }}
          image="https://i.ibb.co/bdgzcnb/862730.webp"
          alt="Restaurant"
        />
        <Box className="p-5 flex gap-2 flex-col justify-center items-center flex-1">
          <Typography variant="h5">Pesanan Anda</Typography>
          <TextField
            label="ID Pesanan"
            variant="outlined"
            className="w-4/5"
            margin="normal"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Lihat Pesanan
          </Button>
        </Box>
      </Card>

      {/* Menampilkan informasi struk belanja di bawah Card */}
      {showOverlay && (
        <Box
          id="struk-belanja"
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            textAlign: "center",
            color: "black",
          }}
          data-aos="zoom-in"
          className="w-4/5 mx-auto flex flex-col gap-5 my-20"
        >
          <Box>
            <Typography variant="h5" sx={{ marginBottom: "20px" }}>
              Struk Belanja
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box className="flex justify-between">
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  ID Pesanan: {hasil.id_pesanan}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Nomor Telepon: {hasil.nomor_telepon}
                </Typography>
              </Box>
              <hr />
              <Box className="flex justify-between">
                <Typography
                  variant="body1"
                  sx={{ marginBottom: "10px", textAlign: "left" }}
                >
                  Nama Pelanggan: {hasil.nama_pelanggan}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Email: {hasil.email}
                </Typography>
              </Box>
              <hr />
              <Typography
                variant="body1"
                sx={{ marginBottom: "10px", textAlign: "left" }}
              >
                Alamat: {hasil.alamat}
              </Typography>
              <hr />
              <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                Daftar Menu
              </Typography>
              <ul className="text-left">
                {hasil.berisi.map((item, index) => (
                  <li key={index}>
                    {item.nama_menu} - Rp. {item.harga}
                  </li>
                ))}
              </ul>
              <Typography
                variant="body1"
                sx={{ marginBottom: "10px", textAlign: "left" }}
              >
                Total Harga: Rp. {hasil.total_harga_pesanan}
              </Typography>
            </Box>
            <Box className="flex justify-between">
              <Box className="flex items-center justify-center">
                <Typography variant="body1">
                  Status Pesanan : ({hasil.status_pesanan})
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  marginTop: "20px",
                }}
              >
                Cetak Struk
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
