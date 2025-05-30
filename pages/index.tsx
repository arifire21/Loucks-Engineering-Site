import Head from "next/head";
import { Button } from "antd";
import styles from "@/styles/Home.module.css";
import Logo from "@/images/logo.png"
import HomeCarousel from "@/components/home-carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loucks Engineering, Inc. - MEP Consulting Engineers</title>
        <meta name="description" content="For 59 years, we have specialized in designing mechanical, electrical, and plumbing (MEP) systems throughout Florida." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
        <h1 hidden aria-hidden>Loucks Engineering, Inc. - MEP Consulting Engineers</h1>

          <div className='home-container'>
          <div className='home-item'>
            <img id='logo' src={Logo.src} alt="LEI MEP Consulting Engineers Logo" />
            <p className="center" style={{color: "#cc0b02", fontWeight:'bold', fontSize:'16pt'}}>Est. 1966</p>
          </div>
          <div className='home-item' id='home-caro'>
            <HomeCarousel/>
          </div>
        </div>

        <hr id='homeheader' className='titleheader' />
        
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{padding:'1rem 2rem'}}>
          Loucks Engineering, Inc. consulting engineers specialize in mechanical, electrical, and plumbing (MEP) systems. We are known for various restaurants and commercial, residential, and recreation-based projects across Florida, having worked in the state for 59 years.
          Many of our projects are of existing structures being renovated to meet the continuing needs of our clients. With the ability to provide services with Green Building Council certification, we are committed to producing projects with sustainability in mind.
        </p>
          <Button href='/services' variant="filled" type="primary" style={{width: 'fit-content', padding:'1rem', margin: 'auto'}}>See our services</Button>
        </div>
        </main>
    </>
  );
}
