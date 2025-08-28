import Head from "next/head";
import { Button } from "antd";
import styles from '@/styles/services.module.scss';

export default function Services() {
  return (
    <>
        <Head>
        <title>Services | Loucks Engineering, Inc.</title>
        <link rel="canonical" href="https://www.louckseng.com/services" />
        <meta name="description" content="We provide our services to various types of projects, from sizable warehouses to small single-family residences. See all services listed here." />
        </Head>

        <main>
        <h1>Services Provided</h1>
        <p>We provide our services to various types of projects, from sizable warehouses to small single-family residences.</p>

        <div className={styles.serviceFlexContainer}>
          <section className={styles.item}>
            <h2 className={styles.subtitle}>Mechanical</h2>
            <hr className={styles.serviceHeader}/>
            <ul className={styles.list}>
              <li>HVAC Design</li>
              <li>HVAC Load Calculations</li>
              <li>Existing HVAC System Analysis</li>
              <li>Building Energy Audits</li>
              <li>Manufacturing Facility/Cleanroom Ductwork</li>
              <li>System Design for Enclosure Airflow Control<br/>
              <small>(physical enclosure spaces designed by others)</small></li>
            </ul>
          </section>

          <section className={styles.item}>
            <h2 className={styles.subtitle}>Electrical</h2>
            <hr className={styles.serviceHeader}/>
            <ul className={styles.list}>
              <li>Power Distribution</li>
              <li>Lighting Design and Controls</li>
              <li>Data and IT Systems</li>
              <li>Photometrics</li>
              <li>UPS Systems</li>
            </ul>
          </section>

          <section className={styles.item}>
            <h2 className={styles.subtitle}>Plumbing</h2>
            <hr className={styles.serviceHeader}/>
            <ul className={styles.list}>
              <li>Plumbing Systems Design</li>
              <li>Domestic Water System Design</li>
              <li>Sanitary Waste System Design</li>
              <li>Natural Gas System Design</li>
            </ul>
          </section>
        </div>

        <Button href='/portfolio' variant="filled" type="primary">See our work</Button>
      </main>
    </>
  );
}