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

const addUserToRequest = (req, res, next) => {
    if (req.auth && req.auth.user) {
        req.user = { login: req.auth.user };
    }
    next();
};

router.post('/add_favorite', challangeAuth, addUserToRequest, favorites.addFavorite);
router.get('/list_favorite', challangeAuth, addUserToRequest, favorites.listFavorites);
router.post('/remove_favorite', challangeAuth, addUserToRequest, favorites.deleteFavorite);

module.exports = router;