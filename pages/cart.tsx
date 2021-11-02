import React from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";

export default function CartPage(){
return(
    <React.Fragment>

        <div className="container block mx-auto grid-cols-3 grid-rows-3 pb-20">

        <header className="object-top pb-20">
         <Header />
        </header>

        </div>

        <div>
            <Cart />
        </div>

    </React.Fragment>
    );
}