const express = require("express")
const router = require("./routes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(router)
app.use(cors())

app.set("port", 3001)

app.listen(3001, () => console.log(`server is now running on port 3001!`))