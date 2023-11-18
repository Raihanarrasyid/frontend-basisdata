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
  const totalHarga = cartItems.reduce(
    (total, item) => total + item.harga * item.kuantitas,
    0
  );

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
          <Box className="w-4/5 mx-auto text-white">
            <Typography
              data-aos="fade"
              variant="h2"
              className="text-white text-center my-5"
            >
              Keranjang
            </Typography>
            <Box className="flex justify-between">
              <Typography variant="h6">
                Total Harga: Rp {totalHarga.toLocaleString()}
              </Typography>
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate("/order")}
              >
                Checkout
              </Button>
            </Box>
          </Box>
          <Box>
            {cartItems.length !== 0 ? (
              <Box className="my-5 flex gap-5 text-black flex-wrap w-4/5 mx-auto">
                {cartItems.map((item, index) => (
                  <div
                    className="bg-slate-50 card card-compact w-96 shadow-xl"
                    key={index}
                    data-aos="zoom-in"
                  >
                    <figure>
                      <img
                        className="h-52 w-full object-cover"
                        src={item.linkFoto}
                        alt={item.nama_menu}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.nama_menu}</h2>
                      <p>Total makanan: {item.kuantitas}</p>
                      <p>Harga Satuan: Rp. {item.harga.toLocaleString()}</p>
                      <div className="card-actions justify-end">
                        <button
                          onClick={() => cart.removeFromCart(item)}
                          className="btn btn-error"
                        >
                          Hapus
                        </button>
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
