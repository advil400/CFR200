import React from "react";
import Cart from "../components/Cart";
import CF from "/public/assets/cf.png";
import Link from "next/link";
import Image from "next/image";

export default function CartPage(){
return(
    <React.Fragment>
{/* FRONTPAGE: DO DROP DOWN IMAGES, LIST PRODUCTS WITH A + SYMBOL AS PREFIX, E.G: + Varsity Sweater {price}
        <div className="container block mx-auto pb-20">

            <Link href="/" passHref={true}>
            <a className="fixed top-5 left-5 dark:filter dark:invert">
            <Image src={CF} height='40%' width='40%' alt="Chemin de Fer Logo" priority />
            </a>
            </Link>

        </div>
*/}
        <div className="my-5 mx-4">
            <Cart />
        </div>

    </React.Fragment>
    );
}