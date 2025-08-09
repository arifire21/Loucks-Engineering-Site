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
      <Layout style={{minHeight: "100vh"}}>
        {/* <Layout.Header> */}
          <Navbar />
        {/* </Layout.Header> */}
        <Layout.Content className={(currentPage === '/portfolio'? 'portfolio-page' : '') || (currentPage === '/contact'? 'contact-page' : '')}>
          <Component {...pageProps}/>
        </Layout.Content>
        {/* <Layout.Footer> */}
          <Footer/>
          {/* </Layout.Footer> */}
      </Layout>
      </ConfigProvider>
    </div>
  )
}
