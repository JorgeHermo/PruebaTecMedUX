const router = require("express").Router();

router.use("/", require('./cat.routes'))

module.exports = router;
