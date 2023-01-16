// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// module.exports = {

//   development: {
//     client: 'postgresql',
//     connection: {
//       database: 'trees_of_seattle',
//       user:     'postgres',
//       password: 'himalayan4316'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
// };

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'himalayan4316',
      database: 'trees_of_seattle'
    }
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
