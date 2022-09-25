const router = require("express").Router()

const Cat = require('./../models/Cat.model')

router.get("/getAllCats", (req, res) => {

    Cat
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/details/:cat_id", (req, res) => {

    const { cat_id } = req.params

    Cat
        .findById(cat_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/createCat", (req, res) => {

    Cat
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.put("/edit/:cat_id", (req, res) => {

    const { name, description, breed } = req.body
    const { cat_id } = req.params

    Cat
        .findById(cat_id)
        .then(response => res.json(response))
        .catch(err => {
            const errorCode = err.errorCode ? err.errorCode : 500
            const message = err.message ? err.message : "Internal server error"
            res.status(errorCode).json({ message })
        })
})

router.delete("/delete/:cat_id", (req, res) => {

    const { cat_id } = req.params

    Cat
        .findById(cat_id)
        .then(response, res.json(response))
        .catch(err => {
            const errorCode = err.errorCode ? err.errorCode : 500
            const message = err.message ? err.message : "Internal server error"
            res.status(errorCode).json({ message })
        })
})
module.exports = router