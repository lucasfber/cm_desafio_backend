const knex = require("../database/connection");
const ErrorResponse = require("../utils/error-handling/error-response.util");

exports.create = async (req, res, next) => {
  try {
    const { nome, preco } = req.body;

    const produto = { nome, preco };

    const insertedData = await knex("produtos").insert(produto);

    return res.status(201).json({
      data: insertedData,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await knex.select().table("produtos");
    return res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const loja = await knex("produtos").where("id", id).first();

    if (!loja) {
      return next(new ErrorResponse("Produto não encontrado", 404));
    }

    return res.json({ data: loja });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const { nome, preco } = req.body;

    const result = await knex("produtos").update({ nome, preco }).where({ id });

    if (result === 0) {
      return next(new ErrorResponse("Produto não encontrado", 404));
    }

    return res.status(200).json({ info: "Produto atualizado com sucesso!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.exclude = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const result = await knex("produtos").del().where({ id });
    if (result === 0) {
      return next(new ErrorResponse("Produto não encontrado", 404));
    }

    return res.status(200).json({ info: "Produto deletado com sucesso!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.addProdutoToLoja = async (req, res, next) => {
  try {
    const lojaId = parseInt(req.params.id);
    const { produtoId, quantidade } = req.body;

    lojaProduto = { loja_id: lojaId, produto_id: produtoId, quantidade };

    await knex("loja_produto").insert(lojaProduto);

    return res.json({ msg: "OK" });
  } catch (error) {
    next(error);
  }
};

exports.getProdutosByLoja = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    let produtos = await knex
      .select("l.nome", "p.nome", "p.preco", "lp.quantidade")
      .from("lojas as l")
      .leftJoin("loja_produto as lp", "lp.loja_id", "l.id")
      .leftJoin("produtos as p", "p.id", "lp.produto_id")
      .where("l.id", "=", id);

    if (produtos.length === 0) {
      return next(new ErrorResponse("Loja não encontrada.", 404));
    } else if (produtos[0].nome === null && produtos[0].preco === null) {
      produtos = [];
    }
    res.json({ success: true, data: produtos });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateProdutoQuantidade = async (req, res, next) => {
  try {
    const lojaId = parseInt(req.params.id);

    const { produtoId, quantidade } = req.body;

    const result = await knex("loja_produto")
      .update({ loja_id: lojaId, produto_id: produtoId, quantidade })
      .where("loja_id", "=", lojaId)
      .andWhere("produto_id", "=", produtoId);

    if (result === 0) {
      return next(new ErrorResponse("Loja não foi encontrada", 404));
    }

    res.json({ success: true, message: "Registro adicionado com sucesso!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
