const knex = require("knex")
const config = require("./knexfile")
const enviroment = "production"
const knexConfig = config[enviroment]
module.exports = knex(knexConfig)