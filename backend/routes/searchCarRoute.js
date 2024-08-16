const router = require('express-promise-router')();
const basicAuth = require('express-basic-auth');

const searchCar = require('../controllers/searchCar');

const auth = require('../controllers/auth');

var challangeAuth = basicAuth( 
    {
        authorizer : auth.authenticate,
        authorizeAsync : true,
        unauthorizedResponse : { sucesso : 0, error: "usuario ou senha nao confere", cod_erro : 0 }
    }
);

// router.get('/brand', searchCar.searchBrand);
router.get('/brand', challangeAuth, searchCar.searchBrand);
router.get('/model', challangeAuth, searchCar.searchModel);
router.get('/year', challangeAuth,searchCar.searchYear)
router.get('/filtercar', challangeAuth,searchCar.searchFilterCar)
router.get('/searchID', challangeAuth, searchCar.searchID)


module.exports = router;
