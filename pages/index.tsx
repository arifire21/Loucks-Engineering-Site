import Head from "next/head";
import { Button } from "antd";
import styles from "@/styles/Home.module.scss";
import Logo from "@/public/logo.png"
import HomeCarousel from "@/components/home-carousel";
import Ribbon from '../public/ribbon.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Loucks Engineering, Inc. - MEP Consulting Engineers</title>
        <meta name="description" content="For 60 years, we have specialized in designing mechanical, electrical, and plumbing (MEP) systems throughout Florida." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
        <h1 hidden aria-hidden>Loucks Engineering, Inc. - MEP Consulting Engineers</h1>

          <div className={styles.homeContainer}>
          <div className={styles.homeItem}>
            <img className={styles.logo} src={Logo.src} alt="LEI MEP Consulting Engineers Logo" />
            <p className={styles.estDate}>Est. 1966</p>
            <img src={Ribbon.src} alt="60 years strong ribbon" height={60} />
          </div>
          <div className={`${styles.homeItem} ${styles.homeCaro}`}>
            <HomeCarousel/>
          </div>
        </div>

        <hr className={styles.homeHeader}/>
        
        <div className={styles.homeTextContainer}>
          <p className={styles.homeText}>
            Loucks Engineering, Inc. consulting engineers specialize in <strong>mechanical</strong>, <strong>electrical</strong>, and <strong>plumbing</strong> (MEP) systems. We are known for various restaurants and commercial, residential, and recreation-based projects across Florida, having worked in the state for 60 years.
            Many of our projects are of existing structures being renovated to meet the continuing needs of our clients. With the ability to provide services with Green Building Council certification, we are committed to producing projects with sustainability in mind.
          </p>
          <Button href='/services' variant="filled" type="primary">See our services</Button>
        </div>
        </main>
    </>
  );
}
