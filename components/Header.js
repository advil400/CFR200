
import Link from "next/link";
import Image from "next/image";
import CartSummary from "./CartSummary";
import CF from "/public/assets/cf.png";


function Header() {
  return (
    <header className="block md:fixed md:left-0 md:top-0 w-full z-50">
      <Link href="/" passHref={true}>
          <a className="fixed top-5 left-5 dark:filter dark:invert">
          <Image src={CF} height='40%' width='40%' alt="Chemin de Fer Logo" priority />
          </a>
      </Link>
      <span/>
      <div className="fixed text-sm bg-gray-50 text-black top-5 right-5 border-1 rounded-lg border-gray-300 hover:border-gray-400 hover:bg-gray-200 p-1" >
        <CartSummary />
      </div>
    </header>
         
  );
}

export default Header;