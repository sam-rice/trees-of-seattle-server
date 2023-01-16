const knex = require("knex")
const config = require("./db/knexfile")
const enviroment = process.env.NODE_ENV || "development"
// const enviroment = "development" -- previously this
const knexConfig = config[production]
module.exports = knex(knexConfig)