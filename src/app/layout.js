import "./globals.css";

import { Rubik } from "@next/font/google";
import Header from "../components/Header";

const rubik = Rubik({
  subsets: ["latin"], // Subconjuntos de caracteres
  weight: ["400", "500", "700"], // Pesos que quieras usar
});

export const metadata = {
  title: "ABSA",
  description:
    "Forma parte de nuestra familia de socios comerciales. En Grupo ABSA distribuimos las mejores marcas del mercado industrial y de comunicaciones, somos proveedores de soluciones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={rubik.className}
      >
        <div className="flex flex-col h-screen custom-scrollbar">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
