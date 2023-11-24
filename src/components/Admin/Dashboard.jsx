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
import AddMeja from "./AddMeja";
import ManageOrder from "./ManageOrder";

export default function Dashboard() {
  const [menu, setMenu] = useState("menu");
  let content;

  if (menu === "menu") {
    content = <AddMenu />;
  } else if (menu === "manage") {
    content = <ManageOrder />;
  } else if (menu === "meja") {
    content = <AddMeja />;
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
          <Button color="inherit" onClick={() => setMenu("meja")}>
            Kelola Meja
          </Button>
        </Toolbar>
      </AppBar>
      <Container>{content}</Container>
    </Box>
  );
}
