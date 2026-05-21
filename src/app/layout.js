import "./styles/app.scss";
import { Inter } from "next/font/google";
import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";
import Script from "next/script";
import { AccessibilityProvider } from "./providers/AccessibilityProvider";
import AccessibilityFloatingMenu from "./ui/accessibility/AccessibilityFloatingMenu";
// import Chat from "./ui/chat/Chat";
import { Chatn8n } from "./ui/chat/Chatn8n";
import { Suspense } from "react";
import BackArrow from "./ui/layout/BackArrow";

const WEBHOOK_N8N_CHAT_STATUS =
  process.env.NEXT_PUBLIC_WEBHOOK_N8N_CHAT_STATUS === "true";

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

const SITE_URL = "https://www.riocuarto.gob.ar";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  openGraph: {
    title: "Gobierno de Río Cuarto",
    description:
      "Portal oficial del Gobierno de Río Cuarto. Encuentra noticias, trámites, programas y más.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Gobierno de Río Cuarto",
      },
    ],
    siteName: "Gobierno de Río Cuarto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gobierno de Río Cuarto",
    description:
      "Portal oficial del Gobierno de Río Cuarto. Encuentra noticias, trámites, programas y más.",
    images: ["/images/og-default.png"],
  },
  title: {
    default: "Gobierno de Río Cuarto | Portal Oficial",
    template: "%s | Gobierno de Río Cuarto", // %s se reemplazará por el título de cada página
  },
  description:
    "Portal oficial del Gobierno de Río Cuarto. Encuentra noticias, trámites, programas y más.",
  keywords: [
    "gobierno",
    "municipalidad",
    "trámites",
    "noticias",
    "programas",
    "eventos",
    "servicios",
  ],
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      </head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js" />

      <body className={`${inter.variable}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <AccessibilityProvider>
          <Header />
          {children}
          <Footer />
          <AccessibilityFloatingMenu />
          {/* <Chat /> */}
          <Suspense>
            <Chatn8n />
          </Suspense>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
