import "@/styles/globals.css";
import { Red_Hat_Text } from 'next/font/google'
 
const redhat = Red_Hat_Text({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${redhat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}