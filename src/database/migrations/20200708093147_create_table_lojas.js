exports.up = async function (knex) {
  return knex.schema.createTable("lojas", (table) => {
    table.increments("id").primary();
    table.string("nome").unique().notNullable();
    table.string("endereco").notNullable();
    table.string("telefone").notNullable();
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTable("lojas");
};
