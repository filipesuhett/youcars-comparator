const router = require('express-promise-router')();
const basicAuth = require('express-basic-auth');

const comment = require('../controllers/comment');

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

const addUserToRequest = (req, res, next) => {
    if (req.auth && req.auth.user) {
        req.user = { login: req.auth.user };
    }
    next();
};

// router.get('/brand', comment.searchBrand);
router.post('/add_comment', challangeAuth, addUserToRequest, comment.addComment);
router.post('/remove_comment', challangeAuth, addUserToRequest, comment.removeComment);
router.get('/list_comment_user', challangeAuth, addUserToRequest, comment.listCommentUser);
router.get('/list_comment_car', challangeAuth, comment.listCommentCar);
router.get('/most_comments',  comment.mostComments);



module.exports = router;
