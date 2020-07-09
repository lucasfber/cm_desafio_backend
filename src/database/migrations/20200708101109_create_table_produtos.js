exports.up = async function (knex) {
  return knex.schema.createTable("produtos", (table) => {
    table.increments("id").primary();
    table.string("nome").unique().notNullable();
    table.decimal("preco").notNullable();
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTable("produtos");
};
