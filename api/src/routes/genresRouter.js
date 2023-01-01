const { Router } = require('express');
const { get_genres } = require('../controllers/genresController');

const genresRouter = Router();

genresRouter.get('/', get_genres);

module.exports = genresRouter;