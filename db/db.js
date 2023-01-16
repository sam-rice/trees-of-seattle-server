const knex = require("knex")
// const { propfind } = require("../routes")
const knexfile = require("./knexfile")

//  TODO in prod, use dependency injection
//  to create knex instance so db access can be mocked
//  for tests

// TODO in prod don't access knexfile.development directly, 
// instead decide with env vars which config to use

 const db = knex(knexfile.production)

 module.exports = db