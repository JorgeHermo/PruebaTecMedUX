import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1>Cat App!</h1>
                    <hr />
                    <p>Cats MERN Project</p>
                    <Link to="/galerie">
                        <Button variant="dark">to galerie</Button>
                    </Link>

                </Col>

            </Row>

        </Container>
    )
}

export default HomePage