const knex = require("../database/connection");
const ErrorResponse = require("../utils/error-handling/error-response.util");

exports.create = async (req, res, next) => {
  try {
    const { nome, endereco, telefone } = req.body;

    const loja = { nome, endereco, telefone };

    const insertedData = await knex("lojas").insert(loja);

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
    const data = await knex.select().table("lojas");
    return res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const loja = await knex("lojas").where("id", id).first();

    if (!loja) {
      return next(new ErrorResponse("Loja não encontrada", 404));
    }

    return res.json({ success: true, data: loja });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const { nome, endereco, telefone } = req.body;

    const result = await knex("lojas")
      .update({ nome, endereco, telefone })
      .where({ id });

    if (result === 0) {
      return next(new ErrorResponse("Loja não encontrada", 404));
    }

    return res
      .status(200)
      .json({ success: true, message: "Loja atualizada com sucesso!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.exclude = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const result = await knex("lojas").del().where({ id });
    if (result === 0) {
      return next(new ErrorResponse("Loja não encontrada", 404));
    }

    return res.status(204);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
