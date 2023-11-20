import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import { useRestaurantStore } from "../../stores/appStore";

export default function PesanMakanan() {
  const navigate = useNavigate();
  const items = useRestaurantStore((state) => state.menus);
  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);
  return (
    <Box className="text-slate-900 my-10">
      <Box className="w-4/5 mx-auto flex flex-col gap-5">
        <Typography
          data-aos="fade"
          variant="h2"
          className="text-white text-center my-5"
        >
          Semua Menu
        </Typography>
        <Box className="flex flex-col gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="card card-side shadow-xl bg-sky-100"
              data-aos="zoom-in"
            >
              <figure>
                <img
                  src={item.linkFoto}
                  alt="Makanan"
                  className="object-cover w-96 h-52"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.nama_menu}</h2>
                <p>{item.deskripsi}</p>
                <p>Rp. {item.harga.toLocaleString()}</p>
                <div className="card-actions justify-end">
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/order/${item.id_menu}`)}
                  >
                    Pesan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
