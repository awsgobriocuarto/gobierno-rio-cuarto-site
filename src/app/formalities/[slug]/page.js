// src/app/news/[slug]/page.js
import Link from "next/link";
import Image from "next/image"; // Importar el componente Image de Next.js
// Asegúrate de tener estas funciones en tu lib/api.js
import CardNews from "@/app/ui/news/CardNews"; // Asumiendo tu CardNews está en src/app/ui/news/
import {
  fetchAllNewsSlugs,
  fetchNewsDetail,
  fetchRelatedNews,
} from "@/app/lib/api";
