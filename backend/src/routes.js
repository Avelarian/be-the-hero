const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.status(200).json({
        'Hello': 'Routes',
    });
});

// Session routes
routes.post('/session', SessionController.create);

// Ong routes
routes.get('/ongs', OngController.list);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }),
}), OngController.create);

// Incidents routes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.list);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete);

// Profile routes
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

module.exports = routes;