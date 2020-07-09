const express = require("express");
const cors = require("cors");
const swaggerUISetup = require("./config/swagger-setup");

const errorHandler = require("./utils/error-handling/error-handler.middleware");

const app = express();

app.use(express.json());
app.use(cors());

swaggerUISetup(app);

app.use("/lojas", require("./routes/lojas.route"));
app.use("/produtos", require("./routes/produtos.route"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
