import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Aos from "aos";
import { useCartStore } from "../../stores/appStore";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";

export default function Cart() {
  const [refresh, setRefresh] = useState(false);
  const cart = useCartStore();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();
  const totalHarga = cart.cartTotal();
  const handleCheckout = () => {
    if (cartItems.length !== 0) {
      navigate("/form");
    } else {
      setToastMessage("Keranjang masih kosong");
      setToastOpen(true);
      setTimeout(() => {
        setToastOpen(false);
        navigate("/order");
      }, 2000);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);

  useEffect(() => {
    setCartItems(cart.cart);
    setLoading(false);
  }, [cart.cart, refresh]);

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
          <Snackbar
            open={toastOpen}
            autoHideDuration={2000}
            onClose={() => setToastOpen(false)}
          >
            <SnackbarContent
              message={toastMessage}
              style={{ backgroundColor: "#cf001c" }} // Atur latar belakang menjadi merah
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={() => setToastOpen(false)}
                >
                  <Close fontSize="small" />
                </IconButton>
              }
            />
          </Snackbar>
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
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
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
                  variant="h3"
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
