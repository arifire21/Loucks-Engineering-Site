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
            <p className="center est-date">Est. 1966</p>
          </div>
          <div className='home-item' id='home-caro'>
            <HomeCarousel/>
          </div>
        </div>

        <hr id='homeheader' className='service-header' />
        
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p className="home-text">
          Loucks Engineering, Inc. consulting engineers specialize in <strong>mechanical</strong>, <strong>electrical</strong>, and <strong>plumbing</strong> (MEP) systems. We are known for various restaurants and commercial, residential, and recreation-based projects across Florida, having worked in the state for 59 years.
          Many of our projects are of existing structures being renovated to meet the continuing needs of our clients. With the ability to provide services with Green Building Council certification, we are committed to producing projects with sustainability in mind.
        </p>
          <Button href='/services' variant="filled" type="primary">See our services</Button>
        </div>
        </main>
    </>
  );
}
