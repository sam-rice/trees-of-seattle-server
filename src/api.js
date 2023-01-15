const express = require("express")
const cors = require("cors")
const multer = require("multer")
// const serverless = require("serverless-http")

// const router = express.Router()
const app = express()

app.use(express.json())
app.use(cors())

let trees = require("../data/testData.json")

// ---------------MULTER--------------------

const path = require("path")


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../data/images/"))
  },
  filename: (req, file, cb) => {
    console.log("from multer", file)
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

// ---------------ROUTES--------------------

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  next()
})

app.set("port", 3001)
app.listen(app.get("port"), () => {
  console.log(`server is now running on port ${app.get("port")}!`)
})

app.get("/v1/trees", (req, res) => {
  res.status(200).json(trees)
})

app.post("/v1/trees", (req, res) => {
  const requiredParams = ["speciesCommon", "speciesSci", "isNative", "height", "circ", "age", "author", "address", "neighborhood", "lat", "long", "img"]
  const newTree = {
    id: Date.now(),
    ...req.body
  }

  for (let requiredParam of requiredParams) {
    if (!newTree[requiredParam]) {
      return res.status(422).json({ message: `You are missing a required parameter of ${requiredParam}` })
    }

    console.log("from POST", newTree)
    trees = [...trees, newTree]
    return res.status(201).json(newTree)
  }
})

app.post("/v1/trees/photo", upload.single("img"), (req, res) => {

    return res.status(201).json({ message: "success!" })
})

app.get("/v1/trees/pics", (req, res) => {
  // res.status(200).json(trees)
})

// app.use("/.netlify/functions/api", router)

// module.exports.handler = serverless(app)