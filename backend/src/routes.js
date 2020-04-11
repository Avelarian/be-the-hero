const express = require('express');

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
routes.post('/ongs', OngController.create);

// Incidents routes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.list);
routes.delete('/incidents/:id', IncidentController.delete);

// Profile routes
routes.get('/profile', ProfileController.index);

module.exports = routes;