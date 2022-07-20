import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BootstrapFolioCard(props) {
  return (
    <div className='folio-card'>
      <Card style={{ width: '18rem', textAlign: 'center' }} bg='light'>
        <Card.Img variant="top" src={props.img_src} alt="portfolio_preview_img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Link className='btn btn-outline-danger' to={props.link}>
            View Projects
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}