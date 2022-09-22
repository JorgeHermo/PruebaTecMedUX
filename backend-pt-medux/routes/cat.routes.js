const router = require("express").Router()

const { response } = require("express")
const Cat = require('./../models/Cat.model')

router.get("/getAllCats", (req, res) => {

    Cat
        .find()
        .then(response = res.json(response))
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

module.exports = router