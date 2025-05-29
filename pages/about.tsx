import Head from "next/head";

export default function About() {
  return (
    <>
    <Head>
        <title>About Us | Loucks Engineering, Inc.</title>
        <link rel="canonical" href="https://www.louckseng.com/about" />
        <meta name="description" content="Our company was founded in 1966, culminating in years of experience in designing multiple types of projects." />
    </Head>
    
      <main>
        <h1>About Us</h1>

        <section>
          <h2>Overview</h2>
          <section>
            <p className="abt-p">We have experience in Computer-Aided Design (CAD) drafting, working with commercial projects, municipal projects, parks, recreation spaces, and environmentally-friendly projects. Many of our projects are of existing structures being renovated to meet the continuing needs of our clients. With our knowledge and depth we take great pride in being part of the intelligent reuse of existing facilities. We have many projects that have achieved LEED certification.</p>
          </section>
        </section>

        <br/>

        <section>
          <h2>History</h2>
          <section>
            <p className="abt-p">Our company was founded in 1966, and continues to remain a family business. We do what we can to support all who work here so that their tenure is long. This has built a conscientious team that takes great pride in their work.</p>
          </section>
        </section>
      </main>    
    </>
  )
}
