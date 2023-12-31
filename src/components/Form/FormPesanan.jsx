import { Typography, TextField, Button, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import axios from "axios";
import { useCartStore } from "../../stores/appStore";

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "1.5rem",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "& input": {
      color: "white",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
}));

export default function FormPesanan() {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    nomorTelepon: "",
    email: "",
    nomorMeja: "",
  });

  const API = import.meta.env.VITE_API;
  const cart = useCartStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = [cart.cart, formData, cart.cartTotal()];

    const response = await axios.post(`${API}/pesanan/add`, data);

    cart.clearCart();

    setFormData({
      nama: "",
      alamat: "",
      nomorTelepon: "",
      email: "",
      nomorMeja: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);

  return (
    <Box className="h-screen" sx={{ p: 4 }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", mb: 5 }}
        data-aos="zoom-in"
      >
        <Typography
          variant="h2"
          sx={{ color: "white", textAlign: "center", my: 5 }}
        >
          Form Pesanan
        </Typography>
      </Box>
      <form onSubmit={handleSubmit} className="">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Nama"
              variant="outlined"
              fullWidth
              required
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              data-aos="fade-right"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Alamat"
              variant="outlined"
              fullWidth
              required
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              data-aos="fade-left"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Nomor Telepon"
              variant="outlined"
              fullWidth
              required
              type="tel"
              name="nomorTelepon"
              value={formData.nomorTelepon}
              onChange={handleChange}
              data-aos="fade-right"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              data-aos="fade-left"
            />
          </Grid>
          {/* Field baru untuk nomor meja */}
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Nomor Meja"
              variant="outlined"
              fullWidth
              required
              name="nomorMeja"
              value={formData.nomorMeja}
              onChange={handleChange}
              data-aos="fade-right"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
