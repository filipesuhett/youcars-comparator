const router = require('express-promise-router')();
const basicAuth = require('express-basic-auth');

const searchCar = require('../controllers/searchCar');

const auth = require('../controllers/auth');

// const multer = require('multer');
// const upload = multer({ dest : 'uploads'});

var challangeAuth = basicAuth( 
    {
        authorizer : auth.authenticate,
        authorizeAsync : true,
        unauthorizedResponse : { sucesso : 0, error: "usuario ou senha nao confere", cod_erro : 0 }
    }
);

// router.get('/brand', searchCar.searchBrand);
router.post('/brand', challangeAuth, searchCar.searchBrand);
router.post('/model', challangeAuth, searchCar.searchModel);
router.post('/year', challangeAuth,searchCar.searchYear)
router.post('/filtercar', challangeAuth,searchCar.searchFilterCar)


module.exports = router;
