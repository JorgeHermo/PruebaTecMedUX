import { useEffect, useState } from "react"


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
                    cats.length ? <CatList cats={cats} /> : <Loader />
                }

            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New cat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CoasterForm closeModal={closeModal} refreshCoasters={loadCoasters} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CatListPage