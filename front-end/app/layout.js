import { Josefin_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefin = Josefin_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pousada 7 Vidas",
  description: "Seja bem vindo a Pousada 7 Vidas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${josefin.className} bg-[#EAE7D6]/60 relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
