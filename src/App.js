import logo from './logo.svg';
import './App.scss';

//import modules
import Hero from './components/Hero';
import Section from './components/Section';
import { Container, Row, Col } from "react-bootstrap"
import Headline from './components/Widgets/Heading'
import Card from './components/Widgets/Card';
import Idea from './components/Icons/Idea';
import Mockup from './components/Icons/Mockup';
import Engineer from './components/Icons/Engineer';
import ShowcaseData from './data/showcase.js';
import Showcase from './components/Widgets/Showcase';
import Button from './components/Widgets/Button';
import NavTabs from './components/Widgets/NavTabs';
import BasicTabs from './components/Widgets/TabContentTest';
import Carousel from './components/Widgets/Carousel';
import EngineeringBanner from './images/engineerbanner.png';


function App() {

  return (
    <div>
      {/* <NavTabs /> */}
      <BasicTabs />
      {/* <Carousel /> */}
      <Hero />
      <Section
        extraClass="section__services"
      >
        <div className="section__services-title">
          <Headline
            title="Our Services"
          />
        </div>

        <div className="project__list">
          <p> Commercial Buildings <b>|</b> Retail Spaces <b>|</b> Single-Family / Multi-Family Residences <b>|</b> Restaurants <b>|</b> Education Centers </p>
        </div>

        <Container fluid>
          <div className="wrapper">
            <Row>

              {/* TODO: get descriptions / better names */}
              <Col md={{ span: 3 }}>
                <Card
                  icon={<Idea />}
                  title="MEP Drawings"
                  body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}
                />
              </Col>
              <Col md={{ span: 3 }}>
                <Card
                  icon={<Mockup />}
                  title="Load Calcs"
                  body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}
                />
              </Col>
              <Col md={{ span: 3 }}>
                <Card
                  icon={<Engineer />}
                  title="Lorem Ipsum"
                  body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}
                />
              </Col>
            </Row>
          </div>
        </Container>

      </Section>
      <Section
        extraClass="section__blueprint"
      >
            
        <Headline
          title="PROJECT SHOWCASE"
        />
        <div className="wrapper">
          <Row>
            {ShowcaseData().map(item => {
              return (
                <Col md={{ span: 3 }}>
                  <Showcase
                    image={item.image}
                    body={item.bodyCopy}
                    link={item.mapsLink}
                  />
                </Col>
              )
            })}
          </Row>
        </div>
      </Section>

      <Section
        extraClass="section__final-cta"
      >
        <div className="wrapper">
          <Row>
            <Col md={{ span: 5, offset: 1}}>
              <Headline
                title="Client Job Status Tracker"
                extraClass="align-left"
              />
              <p>Track job status using the LEI job number. </p>
              <Button
                title="Launch Tracking Application"
                link="#"
                extraClass="btn__red"
              />
            </Col>
            <Col md={{ span: 6 }}>
              <img src={EngineeringBanner} width="100%"/>
            </Col>
          </Row>
        </div>
      </Section>

      <div className="contact">
        <Headline
          title="Contact Us"
          extraClass="align-left"
        />
        {/* testing using flexbox from TabContentTest */}
        <div className="flex-container">
          <div className="item">
            <p><b>Location</b></p>
            <p>tbd</p>
          </div>
          <div className="item">
            <p><b>Phone</b></p>
            <p>tbd</p>
          </div>
          <div className="item">
            <p><b>Email</b></p>
            <p>tbd</p>
          </div>
        </div>
      </div>

    </div>
  );

}

export default App;
