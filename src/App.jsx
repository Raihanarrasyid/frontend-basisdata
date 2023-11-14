import "./App.css";
import Header from "./components/public/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { RouterProvider } from "react-router-dom";

import router from "./router/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
