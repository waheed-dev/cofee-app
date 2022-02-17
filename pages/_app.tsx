import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className={'bg-gradient-to-r from-green-500 to-fuchsia-500 h-screen'}><Component {...pageProps} /><Footer/></div>
  )
}

export default MyApp
