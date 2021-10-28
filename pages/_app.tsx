import 'tailwindcss/tailwind.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import { CartProvider } from "../context/cart"
import '../styles/globals.css'



export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );        
}