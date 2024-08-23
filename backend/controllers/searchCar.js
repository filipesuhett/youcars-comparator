const db = require('../config/database');

exports.searchBrand = async (req, res) => {
    try {
        const getBrand = await db.query('SELECT DISTINCT marca FROM Carro');
        return res.status(200).json(getBrand.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.searchModel = async (req, res) => {
    const { marca } = req.query;

    if (!marca) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 1,
            erro: 'faltam parametros'
        });
    }

    try {
        const getModel = await db.query('SELECT DISTINCT modelo FROM Carro WHERE marca = $1', [marca]);
        return res.status(200).json(getModel.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.searchYear = async (req, res) => {
    const { marca, modelo } = req.query;

    if (!marca || !modelo) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 1,
            erro: 'faltam campos'
        });
    }

    try {
        const getYear = await db.query('SELECT DISTINCT ano FROM Carro WHERE marca = $1 AND modelo = $2', [marca, modelo]);
        return res.status(200).json(getYear.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.searchFilterCar = async (req, res) => {
    const { marca, modelo, ano } = req.query;

    if (!marca) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 1,
            erro: 'faltam campos'
        });
    }

    try {
        if (ano === '' && modelo === '') {
            const getFilterCar = await db.query('SELECT * FROM Carro WHERE marca = $1', [marca]);
            if (!getFilterCar) {
                return res.status(200).send({
                    sucesso: 0,
                    cod_erro: 1,
                    erro: 'nenhum carro encontrado'
                });
            }
            return res.status(200).json(getFilterCar.rows);
        } else if (ano === '') {
            const getFilterCar = await db.query('SELECT * FROM Carro WHERE marca = $1 AND modelo = $2', [marca, modelo]);
            if (!getFilterCar) {
                return res.status(200).send({
                    sucesso: 0,
                    cod_erro: 1,
                    erro: 'nenhum carro encontrado'
                });
            }
            return res.status(200).json(getFilterCar.rows);
        } else if (modelo === '') {
            const getFilterCar = await db.query('SELECT * FROM Carro WHERE marca = $1 AND ano = $2', [marca, ano]);
            if (!getFilterCar) {
                return res.status(200).send({
                    sucesso: 0,
                    cod_erro: 1,
                    erro: 'nenhum carro encontrado'
                });
            }
            return res.status(200).json(getFilterCar.rows);
        } else {
            const getFilterCar = await db.query('SELECT * FROM Carro WHERE marca = $1 AND modelo = $2 AND ano = $3', [marca, modelo, ano]);
            if (!getFilterCar) {
                return res.status(200).send({
                    sucesso: 0,
                    cod_erro: 1,
                    erro: 'nenhum carro encontrado'
                });
            }
            return res.status(200).json(getFilterCar.rows);
        }
    } catch (err) {
        console.error('Error executing query', err.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.searchID = async (req, res) => {
    const { carro_id } = req.query;

    if (!carro_id) {
        return res.status(200).send({
            sucesso: 0,
            cod_erro: 1,
            erro: 'faltam parametros'
        });
    }

    try {
        const getID = await db.query('SELECT * FROM Carro WHERE id = $1', [carro_id]);
        return res.status(200).json(getID.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// exports.mostcommentcars(){
    
// }