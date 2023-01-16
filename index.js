const express = require("express")
const router = require("./routes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(router)
app.use(cors())

const PORT = process.env.PORT || 3001

app.set("port", PORT)

app.listen(PORT, () => console.log(`server is now running on port ${PORT}!`))