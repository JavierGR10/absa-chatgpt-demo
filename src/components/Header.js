import { TbHeart, TbPhone, TbSearch, TbShoppingCart } from "react-icons/tb";
import Link from "next/link";

export default function Header() {
  // const router = useRouter();

  // const handleClick = () => {
  //   redirect.push("/");
  // };

  return (
    <header>
      <div className="bg-white text-[#0066b3] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img
              className="cursor-pointer"
              src="https://absaonline-1521b.kxcdn.com/web/image/res.company/1/logo?unique=e7d67a5"
              width={130}
              height={38}
            />
          </Link>

          <div className="flex items-center space-x-4">
            <TbPhone className="h-5 w-5" />
            <span>662 470 0502</span>
            <button className="px-4 py-2 border rounded-lg border-[#0066b3] text-[#0066b3] hover:bg-[#0066b3] hover:text-white transition-colors">
              Registrarse
            </button>
            <button className="px-4 py-2 border rounded-lg border-[#0066b3] text-[#0066b3] hover:bg-[#0066b3] hover:text-white transition-colors">
              Iniciar Sesión
            </button>

            <TbHeart className="h-5 w-5" />
            <TbShoppingCart className="h-5 w-5" />
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-[#0066b3] text-white p-4">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <ul className="flex space-x-4 ">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>Categorías</li>
              <li>Promociones</li>
              <li>Catálogos</li>
              <li>Contacto</li>
              <li>Cotizador</li>
              <li>Blog</li>
              <li>
                {" "}
                <Link href="/chat-gpt">Chat</Link>
              </li>
            </ul>
            <div className="flex">
              <input
                type="search"
                placeholder="Buscar producto"
                className="px-3 py-2 text-black rounded-3xl focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 bg-white text-[#0066b3] hover:bg-gray-200 px-3 rounded-full"
              >
                <TbSearch className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
