import "./styles/app.scss";
import { Inter } from "next/font/google";
import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";
import Script from "next/script";
import { AccessibilityProvider } from "./providers/AccessibilityProvider";
import AccessibilityFloatingMenu from "./ui/accessibility/AccessibilityFloatingMenu";

// thin:        100
// extra light: 200
// light:       300
// regular:     400 
// medium:      500
// semi bold:   600
// bold:        700
// black:       800
// ultra black: 900

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "400", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

// export const metadata = {
//   title: "Gobierno Río cuarto",
//   description: "GSitio web oficial del Gobierno de Río Cuarto",
// };

export const metadata = {
  // Metadatos para compartir en redes sociales (Open Graph)
  openGraph: {
    title: 'Gobierno de Río Cuarto',
    description: 'Portal oficial del Gobierno de Río Cuarto. Encuentra noticias, trámites, programas y más.',
    images: ['/og-image.png'], // Debes crear una imagen para esto en tu carpeta /public
  },

  // Plantilla de título para todo el sitio
  title: {
    default: 'Gobierno de Río Cuarto | Portal Oficial',
    template: '%s | Gobierno de Río Cuarto', // %s se reemplazará por el título de cada página
  },
  description: 'Portal oficial del Gobierno de Río Cuarto. Encuentra noticias, trámites, programas y más.',

  // Palabras clave generales (opcional, Google le da poca importancia)
  keywords: ['gobierno', 'municipalidad', 'trámites', 'noticias', 'programas', 'eventos', 'servicios'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es"  >
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js" />

      <body className={`${inter.variable}`}>
        <AccessibilityProvider>
          <Header />
          {children}
          <Footer />
          <AccessibilityFloatingMenu />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
