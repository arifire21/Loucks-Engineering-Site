import Head from "next/head";
import { Button } from "antd";
import styles from "@/styles/Home.module.scss";
import Logo from "@/public/logo.png"
import HomeCarousel from "@/components/home-carousel";
import Ribbon from '../public/ribbon.png'

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
            Loucks Engineering, Inc. consulting engineers specialize in <strong>mechanical</strong>, <strong>electrical</strong>, and <strong>plumbing</strong> (MEP) systems.
            With 60 years of experience, we bring local knowledge to the table. Our firm is known for contributing to several iconic restaurants and entertainment hotspots across Florida. We also produce designs for commercial facilities, residences, and recreation-based projects. Many of our projects involve existing structures being renovated to meet the new or continuing needs of our clients. We are committed to producing projects with sustainability in mind.
          </p>
          <Button href='/services' variant="filled" type="primary">See our services</Button>
        </div>
        </main>
    </>
  );
}
