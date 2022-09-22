import './CatCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CoasterCard = ({ imageUrl, name, cat_id }) => {

    return (
        <Card className="CatCard mb-4">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <hr />
                <Link to={`/details/${cat_id}`}>
                    <div className="d-grid">
                        <Button variant="dark" size="sm" as="div">Details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CoasterCard