import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CartSummary from "./CartSummary";
import CF from "/./assets/cf.png";


function Header() {
  return (
    <header className="md:fixed md:left-0 md:top-0 w-full z-50">
      <Link href="/" passHref={true}>
          <div className="fixed top-5 left-5 hover:blur-xs">
          <Image src={CF} height='30%' width='30%' alt="Chemin De Fer Logo" />
          </div>
      </Link>
      <span/>
      <div className="fixed bg-gray-50 text-black top-5 right-5 border rounded-lg border-gray-300 hover:border-gray-400 hover:bg-gray-200  p-1" >
        <CartSummary />
      </div>
    </header>
         
  );
}

export default Header;