var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/car/marca', function (req, res) {
  res.json([
    {marca: 'honda'},
    {marca: 'toyota'},
    {marca: 'fiat'},
    {marca: 'marllon'}
])
})

app.get('/car/modelo', function (req, res) {
  res.json([
    {modelo: 'eletrico'},
    {modelo: 'turbo'},
    {modelo: 'pulse'},
    {modelo: 'marllon'}
])
})

app.get('/car/ano', function (req, res) {
  res.json([
    {ano: '2024'},
    {ano: '2023'},
    {ano: '2021'},
    {ano: '2020'},
    {ano: 'marllon'}
])
})
 
app.listen(3001, function () {
  console.log('rodando na porta 3001')
})