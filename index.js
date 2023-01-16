const express = require("express")
const router = require("./routes")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(router)
app.use(cors())

// let trees = require("./data/testData.json")

app.listen(3001, () => console.log(`server is now running on port 3001!`))

// ---------------ROUTE CONFIG--------------------



// ---------------ROUTES--------------------

// app.get("/v1/trees", (req, res) => {
//   res.status(200).json(trees)
// })

// app.post("/v1/trees", (req, res) => {
//   const requiredParams = ["speciesCommon", "speciesSci", "isNative", "address", "height", "circ", "age", "author", "imageURL", "neighborhood", "lat", "long"]
//   const newTree = {
//     id: Date.now(),
//     ...req.body
//   }

//   for (let requiredParam of requiredParams) {
//     if (!newTree[requiredParam]) {
//       return res.status(422).json({ message: `You are missing a required parameter of ${requiredParam}` })
//     }

//     console.log("from POST", newTree)
//     trees = [...trees, newTree]
//     return res.status(201).json(newTree)
//   }
// })