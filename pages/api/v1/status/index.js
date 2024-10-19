function status(request, response) {
  response.status(200).json({ chave: "Test API" });
}

export default status;
