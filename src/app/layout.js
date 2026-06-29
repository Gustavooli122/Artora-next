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
  title: "Artora - Materiais de Desenho, Arte e Papelaria",
  description: "Descubra os melhores materiais para desenho, pintura e estudos. Guias completos, avaliações e recomendações para artistas e estudantes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full m-auto flex flex-col">

     <Analytics/>
        {children}
        
      
<script async src="https://www.googletagmanager.com/gtag/js?id=G-F35WZM1GEK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-F35WZM1GEK');
</script>

        </body>
    </html>
  );
}
