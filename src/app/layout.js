import "./styles/app.scss";
import { Inter } from "next/font/google";
import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ['100', '300', '400', '600'],
  variable: "--font-inter",
  display: "swap",
});


export const metadata = {
  title: "Gobierno Río cuarto",
  description: "GSitio web oficial del Gobierno de Río Cuarto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
