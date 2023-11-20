import { useState } from "react";
import { Box, TextField, Button, Snackbar } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { useRestaurantStore } from "../../stores/appStore";

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "1.5rem",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", // Warna border
    },
    "&:hover fieldset": {
      borderColor: "white", // Warna border saat hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", // Warna border saat focused
    },
    "& input": {
      color: "white", // Warna teks
    },
  },
  "& .MuiInputLabel-root": {
    color: "white", // Warna label
  },
}));

export default function AddMenu() {
  const [formData, setFormData] = useState({
    namaMenu: "",
    kategori: "",
    harga: "",
    linkFoto: "",
    deskripsi: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const API = "http://localhost:3001";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/admin/input-menu`, formData);
      console.log(response.data);
      setOpenSnackbar(true);

      setFormData({
        namaMenu: "",
        kategori: "",
        harga: "",
        linkFoto: "",
        deskripsi: "",
      });

      const menus = await axios.get(`${API}/menu/all`);
      useRestaurantStore.setState({ menus: menus.data });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Box
      maxWidth="400px"
      padding="20px"
      border="1px solid #ccc"
      borderRadius="5px"
      color="#fff"
      className="mt-10 mx-auto"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <CustomTextField
          label="Nama Menu"
          name="namaMenu"
          value={formData.namaMenu}
          onChange={handleChange}
          fullWidth
        />
        <CustomTextField
          label="Kategori"
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
          fullWidth
        />
        <CustomTextField
          label="Harga"
          name="harga"
          type="number"
          value={formData.harga}
          onChange={handleChange}
          fullWidth
        />
        <CustomTextField
          label="Link Foto"
          name="linkFoto"
          value={formData.linkFoto}
          onChange={handleChange}
          fullWidth
        />
        <CustomTextField
          label="Deskripsi"
          name="deskripsi"
          multiline
          rows={4}
          value={formData.deskripsi}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Tambah Menu
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Menu berhasil ditambahkan!"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "green", // Mengatur warna latar belakang Snackbar
            color: "white", // Mengatur warna teks menjadi putih agar terlihat jelas pada latar hijau
          },
        }}
      />
    </Box>
  );
}
