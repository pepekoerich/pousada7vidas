import { Josefin_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefin = Josefin_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pousada 7 Vidas - Lagoa de Ibiraquera",
  description:
    "Descubra a Pousada 7 Vidas na deslumbrante Lagoa de Ibiraquera. Conforto, natureza e tranquilidade em um só lugar.",
  image: "/foto28",
  url: "https://www.pousada7vidas.com.br",
  type: "website",
  twitterCard: "/foto28",
  twitterTitle: "Pousada 7 Vidas - Lagoa de Ibiraquera",
  twitterDescription:
    "Descubra a Pousada 7 Vidas na deslumbrante Lagoa de Ibiraquera. Conforto, natureza e tranquilidade em um só lugar.",
  twitterImage: "/foto28",
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
