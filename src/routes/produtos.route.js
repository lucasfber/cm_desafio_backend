const express = require("express");
const router = express.Router();

const {
  create,
  getAll,
  getOne,
  update,
  exclude,
} = require("../controllers/produtos.controller");

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getOne);

router.put("/:id", update);

router.delete("/:id", exclude);

module.exports = router;
