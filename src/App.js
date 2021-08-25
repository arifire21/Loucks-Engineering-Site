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


function App() {

  return (
    <div>
      <Hero/>
      <Section
      extraClass="section__services"
      >
        <div className="section__services-title">
          <Headline
          title="Our Services"
          />
        </div>
        <Container fluid>
          <Row>
            <Col md={{span: 2, offset: 3}}>
              <Card
              icon={<Idea/>}
              title="Lorem Ipsum"
              body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}
              />
            </Col>
            <Col md={{span: 2}}>
            <Card
              icon={<Mockup/>}
              title="Lorem Ipsum"
              body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}
              />
            </Col>
            <Col md={{span: 2}}>
            <Card
              icon={<Engineer/>}
              title="Lorem Ipsum"
              body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}
              />
            </Col>
          </Row>
        </Container>
      </Section>
      

    </div>
  );
  
}

export default App;
