import Head from "next/head";
import Link from "next/link";
import ProductList from "../components/ProductList";
import CartSummary from "./CartSummary";

import CFLogo from "../svg/cf-logo.svg";

function Header() {
  return (
    <header className="md:absolute md:left-0 md:top-0 w-full z-10">
      <div>
      <CFLogo />
      </div>

      <div >
        <CartSummary />
      </div>
      </header>
         
  );
}

export default Header;