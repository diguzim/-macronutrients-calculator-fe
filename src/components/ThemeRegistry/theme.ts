import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  display: "swap",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF5733",
    },
    secondary: {
      main: "#FFD700",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
