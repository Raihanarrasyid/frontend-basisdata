import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Aos from "aos";

const items = [
  {
    nama: "Nasi Goreng",
    linkFoto:
      "https://cdn1-production-images-kly.akamaized.net/C84FgHuetKDIc1agT4IPljynG3k=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg",
    deskripsi: "nasi goreng pake marimas anggur",
    harga: 12000,
  },
  {
    nama: "Sate Ayam",
    linkFoto: "https://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg",
    deskripsi: "pake telor dadar",
    harga: 15000,
  },
  {
    nama: "Mie Goreng",
    linkFoto:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/08/01045246/ini-resep-mie-goreng-dengan-bahan-sederhana-yang-menggugah-selera-halodoc.jpg.webp",
    deskripsi: "pake tempe",
    harga: 15000,
  },
  {
    nama: "Bubur Ayam",
    linkFoto:
      "https://www.masakapahariini.com/wp-content/uploads/2023/06/shutterstock_1927030937.jpg",
    deskripsi: "harus diaduk",
    harga: 8000,
  },
];

export default function Products() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      once: false,
    });
  }, []);
  return (
    <Box className="w-4/5 mx-auto" sx={{ color: "white" }}>
      <Box className="flex items-center justify-center mt-10">
        <Typography data-aos="fade-up" variant="h3" className="p-5 border-b-2 ">
          Daftar Menu
        </Typography>
      </Box>
      <Box className="flex flex-wrap justify-center mt-5">
        {items.map((item, index) => (
          <Card data-aos="zoom-in" key={index} sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: "cover" }}
              image={item.linkFoto}
              alt={item.nama}
            />
            <CardContent className="flex flex-1 flex-col">
              <Typography gutterBottom variant="h5" component="div">
                {item.nama}
              </Typography>
              <Box className="flex flex-col justify-evenly">
                <Typography variant="body2" color="text.secondary">
                  {item.deskripsi}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Harga: Rp {item.harga}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
