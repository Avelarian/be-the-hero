const connection = require('../database/connection');
const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async list (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.status(200).json(ongs);
    },
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; // Garantir que o usuario mande as informacoes necessarias e apenas elas.

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.status(201).json({ id });
    }
}