import { BotMessageSquare } from 'lucide-react';
import Link from "next/link";
export default function Header() {

  return (
    <header>
      <div className="bg-white text-[#0066b3] p-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              className="cursor-pointer"
              src="https://absaonline-1521b.kxcdn.com/web/image/res.company/1/logo?unique=e7d67a5"
              width={130}
              height={38}
            />
          </Link>
        </div>
      </div>
      <div className="bg-[#0066b3] text-white p-4 flex justify-center items-center space-x-4">
        <span className="text-2xl text-center font-bold">ABSA - ChatGPT</span>
        <BotMessageSquare size={40} />
      </div>
    </header>
  );
}
