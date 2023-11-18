import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { useRestaurantStore } from "../../stores/appStore";

export default function Products() {
  const navigate = useNavigate();
  const items = useRestaurantStore((state) => state.menus);
  const displayedItems = items.slice(0, 6);
  return (
    <Box className="w-4/5 mx-auto my-10" sx={{ color: "white" }}>
      <Box className="flex flex-col gap-5 items-center justify-center mt-10">
        <Typography data-aos="fade-up" variant="h3" className="p-5 border-b-2 ">
          Daftar Menu
        </Typography>
        <Button
          variant="contained"
          size="large"
          data-aos="fade-up"
          onClick={() => {
            navigate("/order");
          }}
        >
          Pesan Makanan
        </Button>
      </Box>
      <Box className="flex flex-wrap justify-center mt-5">
        {displayedItems.map((item, index) => (
          <Card data-aos="zoom-in" key={index} sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
              component="img"
              sx={{ height: 200, width: 300, objectFit: "cover" }}
              image={item.linkFoto}
              alt={item.nama_menu}
            />
            <CardContent className="flex flex-1 flex-col">
              <Typography gutterBottom variant="h5" component="div">
                {item.nama_menu}
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
