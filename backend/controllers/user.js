const db = require('../config/database');
const bcrypt = require('node-php-password');

exports.registerUser = async (req, res) => {
    if(req.body.hasOwnProperty('novo_login') && req.body.hasOwnProperty('nova_senha')) {
        
        const { novo_login, nova_senha} = req.body;
        console.log(novo_login, nova_senha)
        var senha = bcrypt.hash(nova_senha);

        const hasUserQuery = await db.query(
            "SELECT login FROM Usuario WHERE login=$1",
            [novo_login]
        );

        if(hasUserQuery.rows.length === 0) {
            try {
                const insertUserQuery = await db.query(
                    "INSERT INTO Usuario (login, senha) VALUES ($1, $2)",
                    [novo_login, senha]
                );

                res.status(200).send(
                    {
                        sucesso : 1
                    }
                );
            }
            catch (err) {
                var errorMsg = "erro BD: ";
                res.status(200).send(
                    {
                        sucesso : 0,
                        cod_erro : 2,
                        erro : errorMsg.concat(err)
                    }
                );
            }
        }
        else {
            var errorMsg = "usuario ja está cadastrado";
            res.status(200).send(
                {
                    sucesso : 0,
                    cod_erro : 2,
                    erro : errorMsg
                }
            );
        }
    }
    else {
        var errorMsg = "faltam parametros";
        res.status(200).send(
            {
                sucesso : 0,
                cod_erro : 3,
                erro : errorMsg
            });
        }
    };

exports.changePassword = async (req, res) => {
    if(req.body.hasOwnProperty('nova_senha') && req.body.hasOwnProperty('confirma_senha') && req.body.hasOwnProperty('senha_atual')) {
        
        if (req.body.nova_senha !== req.body.confirma_senha) {
            return res.status(200).send({
                sucesso: 1,
                cod_erro: 4,
                erro: 'senhas diferentes'
            });
        }
        
        const {nova_senha} = req.body;
        var senha = bcrypt.hash(nova_senha);

        const verifyPasswordQuery = await db.query(
            "SELECT senha FROM Usuario WHERE login = $1",
            [req.user.login]
        );
        
        if 
        (bcrypt.verify(req.body.senha_atual, verifyPasswordQuery.rows[0]['senha'])) {
            try {
                const insertUserQuery = await db.query(
                    "UPDATE Usuario SET senha = $1 WHERE login = $2",
                    [senha, req.user.login]
                );

                return res.status(200).send({
                    sucesso: 1
                });
            }
            catch (err) {
                var errorMsg = "erro BD: ";
                return res.status(200).send({
                    sucesso: 0,
                    cod_erro: 2,
                    erro: errorMsg.concat(err)
                });
            }
        }
        else {
            return res.status(200).send({
                sucesso: 1,
                cod_erro: 3,
                erro: 'senhas diferentes'
            });
        }
    }
    else {
        var errorMsg = "faltam campos";
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 3,
            erro: errorMsg
        });
    }   
};

exports.deleteUser = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id FROM Usuario WHERE login = $1",
            [req.user.login]
        );

        if (result.rows.length > 0) {
            const userId = result.rows[0].id;

            // Delete from Favoritos first
            await db.query(
                "DELETE FROM Favoritos WHERE usuario_id = $1",
                [userId]
            );

            // Delete from Usuario
            await db.query(
                "DELETE FROM Usuario WHERE id = $1",
                [userId]
            );

            res.status(200).send(
                {
                    sucesso: 1
                }
            );
        } else {
            res.status(404).send(
                {
                    sucesso: 0,
                    cod_erro: 4,
                    erro: "User not found"
                }
            );
        }
    } catch (err) {
        res.status(500).send(
            {
                sucesso: 0,
                cod_erro: 2,
                erro: "erro BD: " + err.message
            }
        );
    }
};