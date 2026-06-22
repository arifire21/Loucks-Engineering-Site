import Head from "next/head";
import styles from "@/styles/about.module.scss"
import { GiPalmTree } from "react-icons/gi";

export default function About() {
  return (
    <>
    <Head>
        <title>About Us | Loucks Engineering, Inc.</title>
        <link rel="canonical" href="https://www.louckseng.com/about" />
        <meta name="description" content="Our company was founded in 1966, culminating in years of experience in designing multiple types of projects." />
    </Head>
    
      <main>
        <h1 style={{marginBottom:"1rem"}}>About Us</h1>

        <div className={styles.aboutContainer}>
        <section className={styles.aboutItem}>
          <h2>Why Work With Us?</h2>
            <p className={styles.abtPara}>We utilize Computer-Aided Design (CAD) drafting, working with <strong>commercial</strong> projects, <strong>municipal</strong> projects, <strong>residential</strong> spaces, <strong>parks</strong>, <strong>recreation</strong> spaces, and <strong>environmentally-friendly</strong> projects. Many of our projects consist of existing structures being renovated to meet the continuing needs of our clients. With our knowledge and depth we take great pride in being part of the intelligent reuse of existing facilities. We have many projects that have achieved LEED certification.</p>
        </section>

        <hr className={styles.header}/>

        <section className={styles.aboutItem}>
          <h2>History</h2>
            <p className={styles.abtPara}>Our company was founded in <strong>1966</strong> here in south Florida, and continues to remain a family business. We do what we can to support all who work here so that their tenure is long. This has built a conscientious team that takes great pride in their work.</p>
        </section>
        </div>
        <p style={{marginTop: '1rem'}}><GiPalmTree style={{verticalAlign:'bottom'}} size={25}/> Proud sponsor of an <a className={styles.pLink} href="https://adoptadune.com/" target="_blank">Adopt a Dune</a> sand dune!</p>
      </main>    
    </>
  )
}
