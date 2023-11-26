const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

server.post('/dados', (req, res) => {
  const { temperatura, umidade, gas } = req.body;
  console.log('Dados recebidos:', { temperatura, umidade, gas });
  res.status(200).send('Dados recebidos com sucesso.');
});

server.get('/mensagem', (req, res) => {
    res.status(200).send('Esta é uma mensagem para a rota GET.');
  });
  
server.listen(3000, () => {
  console.log(`Servidor rodando`);
});
