import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

// Fonts Veriables

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

//  Meta data of website

export const metadata = {
  title: "Portfolio-V1",
  description: "My First Potfolio",
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
