import { Col, Row } from 'react-bootstrap'
import CatCard from '../CatCard/CatCard'

const CatsList = (cats) => {

    return (
        <Row>
            {
                cats.map(cat => {
                    return (
                        <Col md={3} key={cat.cat_id} >
                            <CatCard {...cat} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default CatsList