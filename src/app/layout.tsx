import { Box } from "@mui/material";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MaCal - Macronutrients Calculator",
  description: "MaCal - Macronutrients Calculator",
  keywords: "MaCal - Macronutrients Calculator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mx: ["16px", "120px"],
              my: ["80px", "120px"],
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
