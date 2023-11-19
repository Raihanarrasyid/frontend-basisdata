import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Typography, Button, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useParams } from "react-router-dom";
import { useRestaurantStore, useCartStore } from "../../stores/appStore";

export default function DetailMakanan() {
  const { menuId } = useParams();
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const items = useRestaurantStore((state) => state.menus);
  const cart = useCartStore();
  const [item, setItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const foundItem = items.find((item) => item.id_menu.toString() === menuId);
    if (foundItem) {
      setItem(foundItem);
      setLoading(false);
    } else {
      setLoading(true);
      // Lakukan logika atau tindakan yang sesuai jika item tidak ditemukan
    }
  }, [items, menuId]);

  const handleStoreCart = () => {
    cart.addToCart(item, count);
    // cart.clearCart();
    // console.log(cart.cart);
  };

  return (
    <Box className="text-black p-10 bg-white h-screen">
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        item && ( // Mengecek apakah item ada sebelum merender
          <Box width="80%" m="auto">
            <Box display="flex" flexWrap="wrap" columnGap="40px">
              <Box flex="1 1 40%" mb="40px">
                <img
                  alt={item?.nama_menu}
                  className="w-full h-full rounded-lg shadow-lg"
                  style={{ objectFit: "cover" }}
                  src={item?.linkFoto}
                />
              </Box>

              <Box flex="1 1 50%" mb="40px">
                <Box m="65px 0 25px 0">
                  <Typography variant="h3">{item.nama_menu}</Typography>
                  <Typography>Rp. {item.harga}</Typography>
                  <Typography sx={{ mt: "20px" }}>{item.deskripsi}</Typography>
                </Box>

                <Box display="flex" alignItems="center" minHeight="50px">
                  <Box
                    display="flex"
                    alignItems="center"
                    border={`1.5px solid black`}
                    mr="20px"
                    p="2px 5px"
                  >
                    <IconButton
                      sx={{ color: "black" }}
                      onClick={() => setCount(Math.max(count - 1, 1))}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                    <IconButton
                      sx={{ color: "black" }}
                      onClick={() => setCount(count + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Button
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: 0,
                      minWidth: "150px",
                      padding: "10px 40px",
                    }}
                    onClick={handleStoreCart}
                  >
                    ADD TO CART
                  </Button>
                </Box>
                <Box>
                  <Box m="20px 0 5px 0" display="flex">
                    <FavoriteBorderOutlinedIcon />
                    <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
                  </Box>
                  <Typography>CATEGORIES: {item.kategori}</Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexWrap="wrap" gap="15px">
              <hr
                style={{
                  borderTop: "2px solid black",
                  width: "100%",
                  margin: "10px 0",
                }}
              />
              <div style={{ flex: "1", flexGrow: "1", whiteSpace: "pre" }}>
                {item.deskripsi}
              </div>
            </Box>
          </Box>
        )
      )}
    </Box>
  );
}
