const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json());

let ultimoDado = null;

server.post('/dados', (req, res) => {
  const { temperature, humidity, mq2 } = req.body;
  console.log('Dados recebidos:', { temperature, humidity, mq2 });

  // Armazene o último dado
  ultimoDado = { temperature, humidity, mq2 };

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
