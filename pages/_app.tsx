import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { usePathname } from 'next/navigation';
import { useState, useCallback, useEffect, createContext } from "react";

import { Layout, ConfigProvider, theme } from "antd";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ['latin'],
})
 
export const AccContext = createContext({})
 
// export function AccStatusProvider({children,}: {children: React.ReactNode}) {
//   return <AccContext.Provider value={{darkModeTop}}>{children}</AccContext.Provider>
// }

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

  //for RM mode
  const [windowQueryMotion, setWindowQueryMotion] = useState<MediaQueryList>();
  const [reducedMotionTop, setReducedMotion] = useState<boolean>(true); //`motion` set to true by antd

  const reducedMotionChange = useCallback((event: MediaQueryListEvent) => {
    console.log(event.matches);
    setReducedMotion(event.matches);
  }, []);

  //set windowQuery at start otherwise undefined
  useEffect(() => {
    if (typeof window != "undefined" && typeof window.matchMedia === "function") {
      console.log("hit window query match media");
      setWindowQuery(window.matchMedia("(prefers-color-scheme:dark)"));
      setDarkMode(window.matchMedia("(prefers-color-scheme:dark)").matches)
      setWindowQueryMotion(window.matchMedia("(prefers-reduced-motion: reduce)"));
      if(window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(prefers-reduced-motion)").matches){
        setReducedMotion(false);
      } else if(window.matchMedia("(prefers-reduced-motion: no-preference)").matches){
        setReducedMotion(true);
      }
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
    windowQuery?.addEventListener("change", reducedMotionChange);
    return () => {
      windowQuery?.removeEventListener("change", darkModeChange);
      windowQuery?.removeEventListener("change", reducedMotionChange);
    // };
    }
  }, [windowQuery, darkModeChange, reducedMotionChange]);

  // useEffect(() => {
  //   console.log(windowQuery?.matches ? true : false);
  //   setDarkMode(windowQuery?.matches ? true : false);
  // }, []);

  //parent function for switch child
  function handleDarkSwitchChange(checked:boolean){
    console.log("Switch toggled:", checked);
    setDarkMode(checked);
  };
  function handleAccSwitchChange(checked:boolean){
    console.log("Switch toggled:", checked);
    setReducedMotion(checked);
  };

  return (
    <div className={playfair.className}>
      {/* prevent terrible css-dev-only tags overriding everything */}
      <ConfigProvider theme={{
        hashed: false,
        algorithm: darkModeTop ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          motion: reducedMotionTop,
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
          <AccContext.Provider value={{reducedMotionTop}}>
          <Navbar
            darkModeFromTop={darkModeTop}
            handleDarkSwitchChangeFromTop={handleDarkSwitchChange}
            accModeFromTop={reducedMotionTop}
            handleAccSwitchChangeFromTop={handleAccSwitchChange}
          />
          <Layout.Content style={layoutStyle}>
            <Component {...pageProps}/>
          </Layout.Content>
          </AccContext.Provider>
          <Footer/>
        </Layout>
      </ConfigProvider>
    </div>
  )
}
