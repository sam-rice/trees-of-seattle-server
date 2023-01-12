const express = require("express")
const cors = require("cors")
// const serverless = require("serverless-http")

const app = express()
// const router = express.Router()
app.use(express.json())
app.use(cors())

let trees = require("../data/testData.json")

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
  const requiredParams = ["id", "speciesCommon", "speciesSci", "height", "circ", "age", "author", "img", "address", "neighborhood", "lat", "long"]
  const newTree = req.body
  console.log(newTree)

  for (let requiredParam of requiredParams) {
    if(!newTree[requiredParam]) {
      return res.status(422).json({message: `You are missing a required parameter of ${requiredParam}`})
    }
    trees = [...trees, newTree]
    return res.status(201).json(newTree)
  }
})

// app.use("/.netlify/functions/api", router)

// module.exports.handler = serverless(app)