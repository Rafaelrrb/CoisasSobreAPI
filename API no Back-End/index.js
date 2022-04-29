const express = require('express')

const app = express() // executa o express() e atribui a variavel app pra ser usado

app.listen('3000') // ouve o navegadro na porta determinada

// node index.js   -roda o projeto

// Criando rotas GET
app.route('/').get((req, res) => res.send('Ola'))
app.route('/sobre').get((req, res) => res.send('Ola sobre'))
// req recebe um conteudo
// res retorna uma resposta

// Crinado rotas POST

//middleware
app.use(express.json())
// convertendo o que for recebido para json para ser exibido no terminal

//app.route('/envia').post((req, res) => console.log(req.body))

app.route('/envia').post((req, res) => res.send(req.body))

// para o post se usa o insomnia

// Criando rota PUT

// nesse caso tambem se usa o middleware
//app.use(express.json())

let author = 'Rafael'

app.route('/edita').get((req, res) => res.send(author))

// usado pra editar informações
app.route('/edita').put((req, res) => {
  author = req.body.author
  res.send(author)
})

// para o post se usa o insomnia

// Crinado rota DELETE

app.route('/deleta/:id').delete((req, res) => {
  res.send(req.params.id)
})

console.log('Conectado...')
