import "./globals.css";

import { Rubik, Poppins } from "@next/font/google";
import Header from "../components/Header";

const rubik = Rubik({
  subsets: ["latin"], // Subconjuntos de caracteres
  weight: ["400", "500", "700"], // Pesos que quieras usar
});

const poppins = Poppins({
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
        className={poppins.className}
      >
        <div className="flex flex-col h-screen custom-scrollbar bg-gray-100">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
