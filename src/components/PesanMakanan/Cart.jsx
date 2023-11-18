import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Aos from "aos";
import { useCartStore } from "../../stores/appStore";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [refresh, setRefresh] = useState(false);
  const cart = useCartStore();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);

  useEffect(() => {
    setCartItems(cart.cart);
    setLoading(false);
  }, [cart.cart, refresh]);

  const handleRemoveFromCart = (item) => {
    cart.removeFromCart(item);
    // Setelah menghapus item, atur refresh menjadi nilai sebaliknya untuk memperbarui tampilan
    setRefresh((prevRefresh) => !prevRefresh);
  };

  return (
    <Box className="my-5">
      {loading ? (
        <>
          <Typography
            data-aos="fade"
            variant="h2"
            className="text-white text-center my-5"
          >
            Loading...
          </Typography>
        </>
      ) : (
        <>
          <Box>
            <Typography
              data-aos="fade"
              variant="h2"
              className="text-white text-center my-5"
            >
              Cart
            </Typography>
          </Box>
          <Box>
            {cartItems.length !== 0 ? (
              <Box className="flex flex-col gap-5 text-black">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="card card-side shadow-xl bg-sky-100 w-4/5 mx-auto"
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
                      <p>Jumlah: {item.kuantitas}</p>
                      <div className="card-actions justify-end">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          Hapus
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </Box>
            ) : (
              <Box className="my-5 p-52 card w-4/5 mx-auto flex justify-center gap-5 items-center text-white">
                <Typography
                  data-aos="fade"
                  variant="h2"
                  className="text-white text-center my-5"
                >
                  Tidak ada barang di keranjang
                </Typography>
                <Button
                  sx={{ color: "white" }}
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/order")}
                >
                  Tambah
                </Button>
              </Box>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}
