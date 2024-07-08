const db = require('../config/database');

exports.addComment = async (req, res) => {
    const { id_carro, comentario } = req.body;
    const checkCarQuery = await db.query(
        "SELECT COUNT(*) AS count_cars FROM Carro WHERE id = $1",
        [id_carro]
    )

    if (!id_carro || !comentario) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 1,
            erro: 'faltam campos'
        });
    }
    else if (checkCarQuery.rows[0].count_cars == 0) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 2,
            erro: 'carro nao existe'
        });
    }

    try {
        const checkCommentQuery = await db.query(
            "SELECT COUNT(*) AS count_comments FROM Comentario WHERE usuario_id = (SELECT id FROM Usuario WHERE login = $1) AND carro_id = $2",
            [req.user.login, id_carro]
        );
        if (checkCommentQuery.rows[0].count_comments == 0) {
            const insertCommentQuery = await db.query(
                "INSERT INTO Comentario (texto, usuario_id, carro_id) VALUES ($1, (SELECT id FROM Usuario WHERE login = $2), $3)",
                [comentario, req.user.login, id_carro]
            );
            return res.status(200).send({
                sucesso: 1
            });
        }
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 2,
            erro: 'ja comentou'
        });
    } catch (err) {
        console.error('Error executing query', err.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.removeComment = async (req, res) => {
    const { id_carro } = req.body;
    const checkCarQuery = await db.query(
        "SELECT COUNT(*) AS count_cars FROM Carro WHERE id = $1",
        [id_carro]
    )
    if (!id_carro) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 1,
            erro: 'faltam campos'
        });
    }
    else if (checkCarQuery.rows[0].count_cars == 0) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 2,
            erro: 'carro nao existe'
        });
    }
    try {
        const checkCommentQuery = await db.query(
            "SELECT COUNT(*) AS count_comments FROM Comentario WHERE usuario_id = (SELECT id FROM Usuario WHERE login = $1) AND carro_id = $2",
            [req.user.login, id_carro]
        );
        if (checkCommentQuery.rows[0].count_comments == 0) {
            return res.status(200).send({
                sucesso: 0,
                cod_erro: 2,
                erro: 'nenhum comentario'
            });
        }
        const removeCommentQuery = await db.query(
            "DELETE FROM Comentario WHERE usuario_id = (SELECT id FROM Usuario WHERE login = $1) AND carro_id = $2",
            [req.user.login, id_carro]
        );
        return res.status(200).send({
            sucesso: 1
        });
    } catch (err) {
        console.error('Error executing query', err.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.listCommentUser = async (req, res) => {
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
    try {
        const getAllFavoritesQuery = await db.query(
            "SELECT * FROM comentario WHERE usuario_id = $1",
            [usuario_id]
        );

        if (getAllFavoritesQuery.rows.length !== 0) {
            res.status(200).send({
                sucesso: 1,
                comentarios: getAllFavoritesQuery.rows,
                qtde_comentarios: getAllFavoritesQuery.rows.length
            });
        } else {
            res.status(200).send({
                sucesso: 1,
                comentarios: [],
                qtde_comentarios: 0
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

exports.listCommentCar = async (req, res) => {
    if ('carro_id' in req.query) {
        const { carro_id } = req.query;

        try {
            const getAllFavoritesQuery = await db.query(
                "SELECT * FROM comentario WHERE carro_id = $1",
                [carro_id]
            );

            if (getAllFavoritesQuery.rows.length !== 0) {
                for (let i = 0; i < getAllFavoritesQuery.rows.length; i++) {
                    const usuarioResult = await db.query(
                        "SELECT login FROM usuario WHERE id = $1",
                        [getAllFavoritesQuery.rows[i].usuario_id]
                    );
                    getAllFavoritesQuery.rows[i].login = usuarioResult.rows[0].login;
                }
                res.status(200).send({
                    sucesso: 1,
                    comentarios: getAllFavoritesQuery.rows,
                    qtde_comentarios: getAllFavoritesQuery.rows.length
                });
            } else {
                res.status(200).send({
                    sucesso: 1,
                    comentarios: [],
                    qtde_comentarios: 0
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