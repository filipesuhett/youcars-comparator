const db = require('../config/database');

exports.addComment = async (req, res) => {
    const { id_carro, usuario, comentario } = req.body;
    const checkCarQuery = await db.query(
        "SELECT COUNT(*) AS count_cars FROM Carro WHERE id = $1",
        [id_carro]
    )
    const checkUserQuery = await db.query(
        "SELECT COUNT(*) AS count_users FROM Usuario WHERE login = $1",
        [usuario]
    )

    if (!id_carro || !usuario || !comentario) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 1,
            erro: 'faltam campos'
        });
    }
    else if (checkUserQuery.rows[0].count_users == 0 || checkCarQuery.rows[0].count_cars == 0) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 2,
            erro: 'usuario ou carro nao existe'
        });
    }
    try {
        const checkCommentQuery = await db.query(
            "SELECT COUNT(*) AS count_comments FROM Comentario WHERE usuario_id = (SELECT id FROM Usuario WHERE login = $1) AND carro_id = $2",
            [usuario, id_carro]
        );
        if (checkCommentQuery.rows[0].count_comments == 0) {
            const insertCommentQuery = await db.query(
                "INSERT INTO Comentario (texto, usuario_id, carro_id) VALUES ($1, (SELECT id FROM Usuario WHERE login = $2), $3)",
                [comentario, usuario, id_carro]
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
    const { id_carro, usuario } = req.body;
    const checkCarQuery = await db.query(
        "SELECT COUNT(*) AS count_cars FROM Carro WHERE id = $1",
        [id_carro]
    )
    const checkUserQuery = await db.query(
        "SELECT COUNT(*) AS count_users FROM Usuario WHERE login = $1",
        [usuario]
    )
    if (!id_carro || !usuario) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 1,
            erro: 'faltam campos'
        });
    }
    else if (checkUserQuery.rows[0].count_users == 0 || checkCarQuery.rows[0].count_cars == 0) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 2,
            erro: 'usuario ou carro nao existe'
        });
    }
    try {
        const checkCommentQuery = await db.query(
            "SELECT COUNT(*) AS count_comments FROM Comentario WHERE usuario_id = (SELECT id FROM Usuario WHERE login = $1) AND carro_id = $2",
            [usuario, id_carro]
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
            [usuario, id_carro]
        );
        return res.status(200).send({
            sucesso: 1
        });
    } catch (err) {
        console.error('Error executing query', err.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

    