const router = require('express-promise-router')();
const basicAuth = require('express-basic-auth');

const favorites = require('../controllers/favorites');

const auth = require('../controllers/auth');

var challangeAuth = basicAuth( 
    {
        authorizer : auth.authenticate,
        authorizeAsync : true,
        unauthorizedResponse : { sucesso : 0, error: "usuario ou senha nao confere", cod_erro : 0 }
    }
);

router.post('/add_favorite', challangeAuth, favorites.addFavorite);
router.get('/list_favorite', challangeAuth, favorites.listFavorites);
router.post('/remove_favorite', challangeAuth, favorites.deleteFavorite);

module.exports = router;