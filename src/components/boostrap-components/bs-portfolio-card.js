import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BootstrapFolioCard(props) {
  return (
    <div className='folio-card'>
      <Card style={{ width: '18rem' }} bg='light'>
        {/* <Card.Img variant="top" src={props.img_src} /> */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Link className='btn btn-danger' to={props.link}>
            View Projects
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}