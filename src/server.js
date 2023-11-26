const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json());

let ultimoDado = null;

server.post('/dados', (req, res) => {
  const { temperatura, umidade, gas } = req.body;
  console.log('Dados recebidos:', { temperatura, umidade, gas });

  // Armazene o último dado
  ultimoDado = { temperatura, umidade, gas };

  res.status(200).send('Dados recebidos com sucesso.');
});

server.get('/ultimodado', (req, res) => {
  if (ultimoDado) {
    res.status(200).json(ultimoDado);
  } else {
    res.status(404).send('Nenhum dado encontrado.');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
