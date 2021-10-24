import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CartSummary from "./CartSummary";
import CF from "/./assets/cf.png";


function Header() {
  return (
    <header className="block md:fixed md:left-0 md:top-0 w-full z-50">
      <Link href="/" passHref={true}>
          <div className="inline-block fixed top-5 left-5 hover:blur-xs">
          <Image src={CF} height='30%' width='30%' alt="Chemin De Fer Logo" />
          </div>
      </Link>
      <span/>
      <div className="fixed text-sm bg-gray-50 text-black top-5 right-5 border-1 rounded-lg border-gray-300 hover:border-gray-400 hover:bg-gray-200 p-0.5" >
        <CartSummary />
      </div>
    </header>
         
  );
}

export default Header;