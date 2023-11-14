import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import backgroundImage from "../../assets/background.webp"; // Ganti dengan path gambar Anda
import { Avatar } from "@mui/material";
import chef from "../../assets/chef.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const jumbotron = {
  background: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  color: "white",
};

export default function Hero() {
  useEffect(() => {
    AOS.init(
      {
        duration: 900,
      },
      []
    );
  });
  return (
    <Box className="flex justify-center items-center" style={jumbotron}>
      <Box className="flex justify-between items-center w-4/5">
        <Box
          data-aos="fade-right"
          className="flex flex-col justify-between items-center w-3/5 text-center"
        >
          <Typography variant="h2">Selamat Datang di</Typography>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Restoran Manganly
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Nikmati pengalaman kuliner terbaik dengan menu kami yang lezat.
          </Typography>
        </Box>
        <Box data-aos="fade-left">
          <Avatar src={chef} sx={{ height: "400px", width: "400px" }} />
        </Box>
      </Box>
    </Box>
  );
}
