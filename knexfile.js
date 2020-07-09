// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      database: "cm_teste-db",
      user: "root",
      password: "root",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
  },
};
