//https://docs.github.com/pt/rest

const express = require('express')
const axios = require('axios')
//npm i axios
// intalar para poder consumir a API

const app = express() // executa o express() e atribui a variavel app pra ser usado

app.listen('3000') // ouve o navegadro na porta determinada

app.route('').get((req, res) => {
  axios
    .get('https://api.github.com/users/Rafaelrrb')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})

console.log('conectado...')
