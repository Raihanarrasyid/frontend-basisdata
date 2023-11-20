import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import AddMenu from "./AddMenu";

export default function Dashboard() {
  const [menu, setMenu] = useState("menu");
  let content;

  if (menu === "menu") {
    content = <AddMenu />;
  } else if (menu === "manage") {
    content = <h1>Manage Order</h1>;
  } else {
    content = null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" onClick={() => setMenu("menu")}>
            Tambah Menu
          </Button>
          <Button color="inherit" onClick={() => setMenu("manage")}>
            Kelola Pesanan
          </Button>
        </Toolbar>
      </AppBar>
      <Container>{content}</Container>
    </Box>
  );
}
