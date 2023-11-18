import { Box } from "@mui/system";
import React from "react";

import { Typography, Button, IconButton, Tab, Tabs } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { useRestaurantStore, useCartStore } from "../../stores/appStore";

export default function DetailMakanan() {
  const { menuId } = useParams();
  const [count, setCount] = useState(1);

  const items = useRestaurantStore((state) => state.menus);
  const cart = useCartStore();

  const item = items.find((item) => item.id_menu.toString() === menuId);
  const handleStoreCart = () => {
    cart.addItem(item, count);
  };

  return (
    <Box className="text-black p-10 bg-white h-screen">
      <Box width="80%" m="auto">
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={item?.nama_menu}
              className="w-full h-full rounded-lg"
              style={{ objectFit: "cover" }}
              src={item?.linkFoto}
            />
          </Box>

          {/* ACTIONS */}
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
          <div style={{ flex: "1", flexGrow: "1", whiteSpace: "pre" }}>
            {item.deskripsi}
          </div>
        </Box>
      </Box>
    </Box>
  );
}
