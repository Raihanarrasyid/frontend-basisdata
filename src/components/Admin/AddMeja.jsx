import { useState } from "react";
import { Box, TextField, Button, Snackbar } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

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

export default function AddMeja() {
  const [formData, setFormData] = useState({
    idMeja: "",
    nomorMeja: "",
    kapasitasMeja: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const API = import.meta.env.VITE_API;

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
      const response = await axios.post(`${API}/admin/input-meja`, formData);
      console.log(response.data);
      //   console.log(formData);
      setOpenSnackbar(true);

      setFormData({
        idMeja: "",
        nomorMeja: "",
        kapasitasMeja: "",
      });
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
          label="ID Meja"
          name="idMeja"
          type="number"
          value={formData.idMeja}
          onChange={handleChange}
          fullWidth
        />
        <CustomTextField
          label="Nomor Meja"
          name="nomorMeja"
          type="number"
          value={formData.nomorMeja}
          onChange={handleChange}
          fullWidth
        />
        <CustomTextField
          label="Kapasitas Meja"
          name="kapasitasMeja"
          type="number"
          value={formData.kapasitasMeja}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Tambah Meja
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
