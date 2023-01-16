const knex = require("knex")
const config = require("./knexfile")
const environment = process.env.NODE_ENV || "development"
const knexConfig = config[environment]
const db = knex(knexConfig)

module.exports = db