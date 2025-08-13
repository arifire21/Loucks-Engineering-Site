import Head from 'next/head';
import { Card } from 'antd';
import ContactForm from "@/components/contact-form";
import {HiOutlineExternalLink} from 'react-icons/hi';
import styles from "@/styles/contact.module.scss"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Loucks Engineering, Inc.</title>
        <link rel="canonical" href="https://www.louckseng.com/contact" />
        <meta name="description" content="Find ways to contact us here." />
    </Head>

      <main>
        <h1>Contact Us</h1>
        <p>Find ways to contact us here!</p>

        <div className={styles.cardContainer}>
        <Card title="Office Location" style={{ maxWidth: 500, border: "1px solid gray" }}>
        <p style={{marginBottom:0}}>321 E. Commercial Blvd<br/>Oakland Park, FL 33334</p>
        <a style={{color: 'darkred', textDecoration: 'underline'}} href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" target="_blank" rel="noreferrer">Directions via Google Maps <HiOutlineExternalLink/></a>
        </Card>

        <Card title="Hours of Operation" style={{ minWidth: 250, maxWidth: 500, border: "1px solid gray" }}>
        <p><strong>Monday - Friday</strong><br/>8:00AM - 5:00PM</p>
        </Card>

        <Card title="Contact Methods" style={{ maxWidth: 500, border: "1px solid gray" }}>
        <p style={{marginBottom:0}}><strong>Office Phone:</strong> (954) 938-1881</p>
        <p><strong>Email:</strong> Bob Loucks -<br/>bob@louckseng.com</p>
        </Card>
        </div>
        <ContactForm/>
      </main>
    </>
  )
}
