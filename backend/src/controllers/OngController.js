const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {

        // Parametros de URL. ex: /users?name=Felipe
        //const params = request.query 
        // Parametros de rota. ex: /users/:id
        //const params = request.params
        // Parametros de Corpo. ex: RestFul Json Body
        //const params = request.body

        const {
            name,
            email,
            whatsapp,
            city,
            uf
        } = request.body

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({
            id
        });
    }
}