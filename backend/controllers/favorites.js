const db = require('../config/database');

exports.addFavorite = async (req, res) => {
    if (req.body.hasOwnProperty('carro_id')) {
        const { carro_id } = req.body;

        try {
            const usuarioResult = await db.query(
                "SELECT id FROM usuario WHERE login = $1",
                [req.user.login]
            );

            if (usuarioResult.rows.length === 0) {
                return res.status(404).send({
                    sucesso: 0,
                    erro: "Usuário não encontrado"
                });
            }

            const usuario_id = usuarioResult.rows[0].id;

            const favoriteToAdd = await db.query(
                "SELECT * FROM favoritos WHERE usuario_id = $1 AND carro_id = $2",
                [usuario_id, carro_id]
            );

            if (favoriteToAdd.rows.length !== 0) {
                const erroMsg = "Esse carro já está favoritado";
                return res.status(200).send({
                    sucesso: 0,
                    erro: erroMsg
                });
            }

            await db.query(
                "INSERT INTO favoritos(usuario_id, carro_id) VALUES($1, $2)",
                [usuario_id, carro_id]
            );

            res.status(200).send({
                sucesso: 1
            });
        } catch (err) {
            const erroMsg = "Erro BD: " + err;
            res.status(500).send({
                sucesso: 0,
                cod_erro: 2,
                erro: erroMsg
            });
        }
    } else {
        const erroMsg = "Faltam parâmetros";
        res.status(400).send({
            sucesso: 0,
            cod_erro: 3,
            erro: erroMsg
        });
    }
};

exports.listFavorites = async (req, res) => {
    try {
        const usuarioResult = await db.query(
            "SELECT id FROM usuario WHERE login = $1",
            [req.user.login]
        );

        if (usuarioResult.rows.length === 0) {
            return res.status(404).send({
                sucesso: 0,
                erro: "Usuário não encontrado"
            });
        }

        const usuario_id = usuarioResult.rows[0].id;
        const getAllFavoritesQuery = await db.query(
            "SELECT * FROM favoritos WHERE usuario_id = $1",
            [usuario_id]
        );

        if (getAllFavoritesQuery.rows.length !== 0) {
            res.status(200).send({
                sucesso: 1,
                favoritos: getAllFavoritesQuery.rows,
                qtde_favoritos: getAllFavoritesQuery.rows.length
            });
        } else {
            res.status(200).send({
                sucesso: 1,
                favoritos: [],
                qtde_favoritos: 0
            });
        }
    } catch (err) {
        const errorMsg = "Erro BD: " + err;
        res.status(200).send({
            sucesso: 0,
            cod_erro: 2,
            erro: errorMsg
        });
    }
};

exports.deleteFavorite = async (req, res) => {
    if ('carro_id' in req.body) {
        const { carro_id } = req.body;

        try {
            const usuarioResult = await db.query(
                "SELECT id FROM usuario WHERE login = $1",
                [req.user.login]
            );

            if (usuarioResult.rows.length === 0) {
                return res.status(404).send({
                    sucesso: 0,
                    erro: "Usuário não encontrado"
                });
            }

            const usuario_id = usuarioResult.rows[0].id;

            await db.query(
                "DELETE FROM favoritos WHERE usuario_id = $1 AND carro_id = $2",
                [usuario_id, carro_id]
            );

            res.status(200).send({
                sucesso: 1
            });
        } catch (err) {
            const errorMsg = "Erro BD: " + err;
            res.status(200).send({
                sucesso: 0,
                cod_erro: 2,
                erro: errorMsg
            });
        }
    } else {
        const errorMsg = "Faltam parâmetros";
        res.status(400).send({
            sucesso: 0,
            cod_erro: 3,
            erro: errorMsg
        });
    }
};