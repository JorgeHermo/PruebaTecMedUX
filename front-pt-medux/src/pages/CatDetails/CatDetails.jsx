import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import catService from "../../services/cat.services"


const CatDetails = () => {

    const [cat, setCat] = useState()

    const { cat_id } = useParams()

    useEffect(() => {
        catService
            .getOneCat(cat_id)
            .then(({ data }) => setCat(data))
            .catch(err => console.error(err))
    }, [])

    return (

        <Container>
            {
                !cat
                    ?
                    <Loader />
                    :
                    <>
                        <h1>Details of {cat.name}</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6 }}>
                                <h3>Description</h3>
                                <p>{cat.description}</p>
                                <p>{cat.breed}</p>
                                <hr />

                                <Link to="/galerie">
                                    <Button as="div" variant="dark">Volver a la galería</Button>
                                </Link>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={cat.imageUrl} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container>
    )
}

export default CatDetails