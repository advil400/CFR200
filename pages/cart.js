import React from "react";
import Cart from "../components/Cart";
import Image from "next/image";
import Link from "next/link";
import CF from "/./assets/cf.png";

export default function CartPage(){
return(
    <React.Fragment>
    <div className="container block mx-auto grid-cols-3 grid-rows-3 pb-20">
    <header className="block md:fixed md:left-0 md:top-0 w-full z-50">
    <Link href="/" passHref={true}>
          <div className="inline-block fixed top-5 left-5 hover:blur-xs">
          <Image src={CF} height='30%' width='30%' alt="Chemin De Fer Logo" />
          </div>
    </Link>
    </header>
    </div>
    <div>
    <Cart />
    </div>
    </React.Fragment>
    );
}