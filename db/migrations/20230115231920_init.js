/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("trees", table => {
    table.increments("id")
    table.string("species_common").notNullable()
    table.string("species_sci").notNullable()
    table.boolean("is_native").notNullable()
    table.integer("height")
    table.integer("circ")
    table.integer("age").notNullable()
    table.string("author").notNullable()
    table.string("img_url")
    table.string("address").notNullable()
    table.string("neighborhood")
    table.decimal("lat", 9, 6).notNullable()
    table.decimal("long", 9, 6).notNullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("trees")
}
