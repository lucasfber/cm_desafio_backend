exports.up = async function (knex) {
  return knex.schema.createTable("loja_produto", (table) => {
    table.increments("id").primary();
    table
      .integer("loja_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("lojas")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("produto_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("produtos")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("quantidade").notNullable();
    table.unique(["loja_id", "produto_id"]);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTable("loja_produto");
};
