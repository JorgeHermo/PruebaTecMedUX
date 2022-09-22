import { Container } from 'react-bootstrap'
import CatForm from '../../components/CatForm/CatForm'

const NewCatPage = () => {

    return (
        <Container>

            <h1>New Cat</h1>

            <hr />

            <CatForm />

        </Container>
    )
}

export default NewCatPage