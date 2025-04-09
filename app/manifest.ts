import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WaiChatt - Agentes de IA para WhatsApp",
    short_name: "WaiChatt",
    description: "Revoluciona tu comunicación con agentes de IA integrados con WhatsApp",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#268656",
    icons: [
      {
        src: "/waichattLogo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/waichattLogo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

