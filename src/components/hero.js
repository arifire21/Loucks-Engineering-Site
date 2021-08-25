import { Container, Row, Col } from "react-bootstrap"
import Logo from '../images/logo.png'
import Button from './Widgets/Button'

export default function (props) {
    return (
        <div className="hero">
            <Container fluid>
                
                    <Row>
                        <Col md={{ span: 6, offset: 6 }}>
                            <div className="hero__content-wrapper">
                            <img src={Logo} width="80%"/>
                            <Button
                                title="Launch Tracking Application"
                                link="#"
                                extraClass="btn__red"
                            />
                            </div>
                        </Col>
                    </Row>
                
            </Container>
        </div>
    )
}