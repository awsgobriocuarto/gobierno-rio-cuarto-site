/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    quietDeps: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       // Captura cualquier ruta que empiece con /mapas/
  //       source: "/mapas-antiguos",
  //       // Lo envía al servidor que realmente procesa los mapas
  //       destination: "http://mapasriocuarto.gob.ar:8080/maparioiv/tilecache/",
  //     },
  //     {
  //       source: "/js/:path*",
  //       destination: "http://mapasriocuarto.gob.ar/js/:path*",
  //     },
  //     {
  //       source: "/css/:path*",
  //       destination: "http://mapasriocuarto.gob.ar/css/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
