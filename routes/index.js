const express = require("express")
const cors = require("cors")
const treesController = require("../controller/trees")

const router = express.Router()

router.use(cors())

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  next()
})

// ---------------ROUTES--------------------

router.get("/v1/trees", treesController.getTrees)

router.post("/v1/trees", treesController.createTree)

module.exports = router