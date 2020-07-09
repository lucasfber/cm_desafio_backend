const express = require("express");
const cors = require("cors");
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const errorHandler = require("./utils/error-handling/error-handler.middleware");

const swaggerDoc = YAML.load("./swagger.yaml");

const app = express();
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use("/lojas", require("./routes/lojas.route"));
app.use("/produtos", require("./routes/produtos.route"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
