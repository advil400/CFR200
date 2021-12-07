import React from "react";
import Checkout from "../components/Checkout/Checkout.js";

import { useCartState } from "../context/cart";

export default function CheckoutPage(){
const { id } = useCartState();
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
        <div>
            <Checkout cartId={id} />
        </div>

    </React.Fragment>
    );
}