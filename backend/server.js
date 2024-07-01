var express = require('express')
var cors = require('cors')
var app = express()


// Rotas
const searchCarRoute = require('./routes/searchCarRoute');
const commentRoute = require('./routes/commentRoute');
const userRoute = require('./routes/user');
const favoritesRoute = require('./routes/favoritesRoute');
 
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/api/', searchCarRoute);
app.use('/api/', userRoute);
app.use('/api/', commentRoute);
app.use('/api/', favoritesRoute);

app.listen(3001, function () {
  console.log('rodando na porta 3001')
})