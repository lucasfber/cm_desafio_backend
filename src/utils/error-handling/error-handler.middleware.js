const ErrorResponse = require("./error-response.util");

const errorHandler = (err, req, res, next) => {
  console.log("Err", err.message);
  console.log("Code", err.errno);
  let error = { ...err };

  if (error.statusCode === 404) {
    let message = "Produto não encontrado";
    if (err.message.includes("Loja não encontrada")) {
      message = "Loja não encontrada!";
    }
    error = new ErrorResponse(message, 404);
  }

  if (error.errno === 1364) {
    error = new ErrorResponse(
      "Um ou mais campos estão em branco, e necessitam ser preenchidos!",
      400
    );
  }

  if (error.errno === 1054) {
    error = new ErrorResponse("O id enviado é inválido!", 400);
  }

  if (error.errno === 1292) {
    error = new ErrorResponse("O id do produto enviado é inválido!", 400);
  }

  if (error.errno === 1366) {
    error = new ErrorResponse(
      "Por favor informe uma quantidade do produto válida!",
      400
    );
  }

  if (error.errno === 1062) {
    let message = "Produto já cadastrado no banco de dados!";
    if (err.message.includes("lojas_nome_unique")) {
      message =
        "Já existe uma loja com o nome escolhido! Por favor, escolha outro.";
    }
    error = new ErrorResponse(message, 400);
  }

  if (error.errno === 1452) {
    let message =
      "O produto que você está tentando inserir na loja não existe.";

    if (err.message.includes("loja_produto_loja_id_foreign")) {
      message = "A loja que você está tentando inserir produtos não existe.";
    }
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Erro no servidor.",
  });
};

module.exports = errorHandler;
