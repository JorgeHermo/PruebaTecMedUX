import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from "react"
import catService from './../../services/cat.services'

const CatForm = ({ closeModal, refreshCat }) => {

    const [catData, setCatData] = useState({
        name: '',
        description: '',
        breed: '',
        imageUrl: '',
    })

    const handleChange = e => {
        const { value, name } = e.target
        setCatData({ ...catData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        catService
            .createCat(catData)
            .then(() => {
                closeModal()
                refreshCat
            })
            .catch(err => console.error(err))
    }

    const { name, description, breed, imageUrl } = catData

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="breed">
                        <Form.Label>Breed</Form.Label>
                        <Form.Control type="text" value={inversions} onChange={handleChange} name="breed" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="text" value={imageUrl} onChange={handleChange} name="imageUrl" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Create New Cat</Button>
            </div>

        </Form>
    )
}

export default CatForm