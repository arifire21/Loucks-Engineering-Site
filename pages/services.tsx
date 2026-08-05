import Head from "next/head";
import { Button, Card } from "antd";
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

        <main className={styles.cardContainer}>
          <Card title="Mechanical" className={styles.cardCustom}>
          <ul className={styles.list}>
              <li>New HVAC Design & Load Calculations</li>
              <li>Existing HVAC System Analysis</li>
              <li>Building Energy Audits</li>
              <li>Manufacturing Facility or Cleanroom Ductwork Design</li>
              <li>System Design for Enclosure Airflow Control<br/>
                <small>(physical enclosure spaces designed by others)</small>
              </li>
            </ul>
          </Card>

          <Card title="Electrical" className={styles.cardCustom}>
            <div className=""></div>
            <ul className={styles.list}>
              <li>Power Distribution</li>
              <li>Lighting Design and Controls</li>
              <li>Data and IT Systems</li>
              <li>Photometrics</li>
              <li>UPS Systems</li>
            </ul>
          </Card>

          <Card title="Plumbing" className={styles.cardCustom}>
          <ul className={styles.list}>
              <li>Plumbing Systems Design</li>
              <li>Domestic Water System Design</li>
              <li>Sanitary and Grease Waste System Design</li>
              <li>Natural Gas and Propane System Design</li>
            </ul>
          </Card>

        </main>

        <Button href='/portfolio' variant="filled" type="primary">See Our Work</Button>
      </main>
    </>
  );
}