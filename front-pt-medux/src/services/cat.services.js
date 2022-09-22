import axios from 'axios'

class CatService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cats`
        })
    }


    getCats() {
        return this.api.get('/getAllCats')
    }

    getOneCat(cat_id) {
        return this.api.get(`/details/${cat_id}`)
    }

    createCat(catData) {
        return this.api.post('/createCat', catData)
    }

    editCat(cat_id, data) {
        return this.api.put(`/edit/${cat_id}`, data)
    }

    deleteCat(cat_id, data) {
        return this.api.delete(`/delete/${cat_id}`, data)
    }
}

const catService = new CatService()

export default catService