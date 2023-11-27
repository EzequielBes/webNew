function status(request, response) {
  response.status(200).json({ chave: "Fazendo um teste" });
}

export default status;
