const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

server.post('/dados', (req, res) => {
  const { temperatura, umidade, gas } = req.body;
  console.log('Dados recebidos:', { temperatura, umidade, gas });
  res.status(200).send('Dados recebidos com sucesso.');
});

server.listen(3000, () => {
  console.log(`Servidor rodando`);
});
