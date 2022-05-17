import BootstrapNavbar from '../components/boostrap-components/bs-navbar';
import { ListGroup } from 'react-bootstrap';
import Footer from '../components/Widgets/Footer';
// import LinkContainer from 'react-router-bootstrap/LinkContainer';

export default function Portfolio() {
  return (
    <div>
      <BootstrapNavbar />

      <h1>Portfolio</h1>
      <p>This is a portfolio overview page. description goes here</p>
      <br/>
      <p>Click on items to be taken to portfolio pages.</p>

      <div className='portfolio-list-container'>
        <div className='portfolio-column'>
          <ListGroup variant="flush">
            {/* <LinkContainer to="/portfolio/residences"> */}
            <ListGroup.Item action href='/portfolio/residences'>Single-Family / Multifamily Residences</ListGroup.Item>
            {/* </LinkContainer> */}
            <ListGroup.Item action href='/portfolio/warehouses'>Warehouses</ListGroup.Item>
            <ListGroup.Item>Office Buildings</ListGroup.Item>
            <ListGroup.Item>Restaurants</ListGroup.Item>
            <ListGroup.Item>Retail Spaces</ListGroup.Item>
            <ListGroup.Item>Salons and Spas</ListGroup.Item>
            <ListGroup.Item>Medical Centers</ListGroup.Item>
            <ListGroup.Item>Hotels</ListGroup.Item>
          </ListGroup>
        </div>
        <div className='portfolio-column'>
          <ListGroup variant="flush">
            <ListGroup.Item>Multi-Purpose</ListGroup.Item>
            <ListGroup.Item>Schools/Colleges</ListGroup.Item>
            <ListGroup.Item>Public Facilities</ListGroup.Item>
            <ListGroup.Item>Telecommunications</ListGroup.Item>
            <ListGroup.Item>Tenent Improvement</ListGroup.Item>
            <ListGroup.Item>Media/Arts and Entertainment</ListGroup.Item>
            <ListGroup.Item>Gymnasiums</ListGroup.Item>
            <ListGroup.Item>8</ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <Footer/>
    </div>
  )
}