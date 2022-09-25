import { useEffect, useState } from "react"
import catService from "../../services/cat.services"

import { Container, Modal } from "react-bootstrap"
import CatsList from "../../components/CatsList/CatsList"
import CatForm from "../../components/CatForm/CatForm"
import Loader from "../../components/Loader/Loader"

const CatListPage = () => {

    const [cats, setCats] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        loadCats()
    }, [])

    const loadCats = () => {
        catService
            .getCats()
            .then(({ data }) => setCats(data))
            .catch(err => console.error(err))
    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <>

            <Container>

                <h1>Cat galerie <span onClick={openModal}>+</span></h1>
                <hr />
                {
                    cats.length ? <CatsList cats={cats} /> : <Loader />
                }

            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New cat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CatForm closeModal={closeModal} refreshCoasters={loadCats} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CatListPage