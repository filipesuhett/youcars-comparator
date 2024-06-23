const db = require('../config/database');
var bcrypt = require('node-php-password');

exports.authenticate = async (login, senha, cb) => {

    const { rows } = await db.query(
        "SELECT senha FROM Usuario WHERE login=$1",
        [login]
    );
    if(rows.length !== 0) {
        if(bcrypt.verify(senha, rows[0]['senha'])) {
            return cb(null, true);
        }
    }
    return cb(null, false);
};