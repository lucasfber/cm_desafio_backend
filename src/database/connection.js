const knexfile = require("../../knexfile");
const knex = require("knex")(knexfile["development"]);

module.exports = knex;
/* const knex = require("knex");

const connection = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "cm_teste-db",
  },
});

module.exports = connection;
 */
