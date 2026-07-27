import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { usePathname } from 'next/navigation';

import { Layout, ConfigProvider, theme } from "antd";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Playfair } from "next/font/google";
import { useState, useCallback, useEffect } from "react";

const playfair = Playfair({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const currentPage = usePathname();
  const layoutStyle = (currentPage === '/portfolio' ? {padding:0} : {padding:"1rem 2rem"})

  //for dark mode
  const [windowQuery, setWindowQuery] = useState<MediaQueryList>();
  const [darkModeTop, setDarkMode] = useState<boolean>(false);

  const darkModeChange = useCallback((event: MediaQueryListEvent) => {
    console.log(event.matches);
    setDarkMode(event.matches);
  }, []);

  //set windowQuery at start otherwise undefined
  useEffect(() => {
    if (typeof window != "undefined" && typeof window.matchMedia === "function") {
      console.log("hit window query match media");
      setWindowQuery(window.matchMedia("(prefers-color-scheme:dark)"));
      setDarkMode(window.matchMedia("(prefers-color-scheme:dark)").matches)
    }
  }, [])

  //do the change
  useEffect(() => {
    //fix?: remove condition
    if(!windowQuery){
      return;
    }
    
    // if(!windowQuery?.matches || windowQuery.media){
    windowQuery?.addEventListener("change", darkModeChange);
    return () => {
      windowQuery?.removeEventListener("change", darkModeChange);
    // };
    }
  }, [windowQuery, darkModeChange]);

  // useEffect(() => {
  //   console.log(windowQuery?.matches ? true : false);
  //   setDarkMode(windowQuery?.matches ? true : false);
  // }, []);

  //parent function for switch child
  function handleSwitchChange(checked:boolean){
    console.log("Switch toggled:", checked);
    setDarkMode(checked);
  };

  return (
    <div className={playfair.className}>
      {/* prevent terrible css-dev-only tags overriding everything */}
      <ConfigProvider theme={{
        hashed: false,
        algorithm: darkModeTop ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#cc0c00",
          colorBgLayout: darkModeTop ? "#111111" : "#f5f5f5", //default is "#f5f5f5"
          colorBgContainer: darkModeTop ? "#222222" : "#ffffff" //default is "#ffffff"
        },
        components: {
          Carousel: {dotHeight: 5, arrowSize: 20},
        }
      }}>
        {/* if currentPage is portfolio, remove padding*/}
        <Layout style={{minHeight: "100vh"}}>
          <Navbar darkModeFromTop={darkModeTop} handleSwitchChangeFromTop={handleSwitchChange}/>
        <Layout.Content style={layoutStyle}>
          <Component {...pageProps}/>
        </Layout.Content>
          <Footer/>
        </Layout>
      </ConfigProvider>
    </div>
  )
}
