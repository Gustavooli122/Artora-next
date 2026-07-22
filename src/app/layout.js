import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://artora.company"),
  title: {
    default: "Artora - Materiais de Desenho, Arte e Papelaria",
    template: "%s | Artora",
  },
  description:
    "Descubra os melhores materiais de desenho, pintura e papelaria. Explore guias, tutoriais, análises e recomendações para desenvolver sua criatividade e evoluir como artista.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      
      <body className="min-h-full m-auto flex flex-col">

     <Analytics/>
        {children}
        


        </body>
    </html>
  );
}
