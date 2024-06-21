var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/', function (req, res) {
  res.json([
    {marca: 'honda'},
    {marca: 'toyota'},
    {marca: 'fiat'}
])
})
 
app.listen(3001, function () {
  console.log('rodando na porta 3001')
})