import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { usePathname } from 'next/navigation';

import { Layout, ConfigProvider } from "antd";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const currentPage = usePathname();

  return (
    <div className={playfair.className}>
      {/* prevent terrible css-dev-only tags overriding everything */}
      <ConfigProvider theme={{ hashed: false,
        components: {
          Carousel: {dotHeight: 5, arrowSize: 20}
        }
      }}>
        {/* if currentPage is portfolio, render special layout more suited to it
            that does not nest content
            bug fix and also futureproofing for map */}
        {currentPage === '/portfolio'? (
          <>
          <Component {...pageProps}/>
          </>
        ) :
        // if not, be normal PLEASE
        (
        <Layout style={{minHeight: "100vh"}}>
          <Navbar />
        <Layout.Content>
          <Component {...pageProps}/>
        </Layout.Content>
          <Footer/>
        </Layout>
        )
        }
      </ConfigProvider>
    </div>
  )
}
