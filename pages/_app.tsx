import 'tailwindcss/tailwind.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import { CartProvider } from "../context/cart"



export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );        
}