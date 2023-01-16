const knex = require("knex")
const config = require("./knexfile")
const enviroment = "development"
const knexConfig = config[enviroment]
module.exports = knex(knexConfig)