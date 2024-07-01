const db = require('../config/database');

exports.addFavorite = async (req, res) => {
    if (req.body.hasOwnProperty('usuario_id') && req.body.hasOwnProperty('carro_id')) {
        const { usuario_id, carro_id } = req.body;

        try {
            const favoriteToAdd = await db.query(
                "SELECT * FROM favoritos WHERE carro_id = $1",
                [carro_id]
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
            res.status(200).send({
                sucesso: 0,
                cod_erro: 2,
                erro: erroMsg
            });
        }
    } else {
        const erroMsg = "Faltam parâmetros";
        res.status(200).send({
            sucesso: 0,
            cod_erro: 3,
            erro: erroMsg
        });
    }
};

exports.listFavorites = async (req, res) => {
    if ('usuario_id' in req.body) {
        const { usuario_id } = req.body;

        try {
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
    } else {
        const errorMsg = "Faltam parâmetros";
        res.status(200).send({
            sucesso: 0,
            cod_erro: 3,
            erro: errorMsg
        });
    }
};

exports.deleteFavorite = async (req, res) => {
    if ('carro_id' in req.body) {
        const { carro_id } = req.body;

        try {
            const favoriteToDelete = await db.query(
                "SELECT * FROM favoritos WHERE carro_id = $1",
                [carro_id]
            );

            if (favoriteToDelete.rows.length === 0) {
                const erroMsg = "Favorito não encontrado";
                return res.status(200).send({
                    sucesso: 0,
                    erro: erroMsg
                });
            }

            await db.query(
                "DELETE FROM favoritos WHERE carro_id = $1",
                [carro_id]
            );

            res.status(200).send({
                sucesso: 1
            });
        } catch (err) {
            const erroMsg = "Erro BD: " + err;
            res.status(200).send({
                sucesso: 0,
                cod_erro: 2,
                erro: erroMsg
            });
        }
    } else {
        const erroMsg = "Faltam parâmetros";
        res.status(200).send({
            sucesso: 0,
            cod_erro: 3,
            erro: erroMsg
        });
    }
};