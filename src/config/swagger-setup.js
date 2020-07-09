const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = YAML.load("./swagger.yaml");

module.exports = function (app) {
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
};
