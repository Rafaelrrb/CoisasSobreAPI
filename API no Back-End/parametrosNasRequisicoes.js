const express = require('express')

const app = express() // executa o express() e atribui a variavel app pra ser usado

app.listen('3000') // ouve o navegadro na porta determinada

//middleware
app.use(express.json())
// convertendo o que for recebido para json para ser exibido no terminal

// BODY PARAMS
// usando o insomnia da parte do bory vc pode passar paramtros em formato JSON

// BODY pode ser recebdio pelo POST PUT e PATCH
app.route('/').post((req, res) => {
  const { nome, livros } = req.body
  // me permite trabalhar melhor com os parametros que são recebidos pelo BODY atribundo eles a variaveis
  res.send(livros[0])
})

// ROUTE PARAMS
// Pegando parametros pela rota

app.route('/:var').get((req, res) => {
  res.send(req.params.var)
})

app.route('/identidade/:var').get((req, res) => {
  res.send(req.params.var)
})

// QUERY PARAMS
// localhost:3000?nome=RAFA&cidade=sls recebido pela URL usando o "?" para determinar que é um QUERY já o "&" faz a união de mais QUERYS

app.route('/').get((req, res) => {
  res.send(`${req.query.nome} ${req.query.cidade}`)
})

console.log('Conectado...')
