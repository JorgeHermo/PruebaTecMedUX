const router = require("express").Router();

router.use("/cats", require('./cat.routes'))

module.exports = router;
