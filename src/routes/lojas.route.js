const express = require("express");
const router = express.Router();

const {
  create,
  getAll,
  getOne,
  update,
  exclude,
} = require("../controllers/lojas.controller");

const {
  addProdutoToLoja,
  getProdutosByLoja,
  updateProdutoQuantidade,
} = require("../controllers/produtos.controller");

router.post("/", create);

router.post("/:id/produtos", addProdutoToLoja);

router.get("/", getAll);

router.get("/:id", getOne);

router.get("/:id/produtos", getProdutosByLoja);

router.put("/:id", update);

router.put("/:id/produtos", updateProdutoQuantidade);

router.delete("/:id", exclude);

module.exports = router;
