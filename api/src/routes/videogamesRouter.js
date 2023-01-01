const { Router } = require('express');
const { create_videogame, get_videogames } = require('../controllers/videogamesController')
const { validationMiddleware } = require('../middlewares');

const videogamesRouter = Router();

videogamesRouter.get('/', get_videogames);
videogamesRouter.post('/', validationMiddleware, create_videogame);

module.exports = videogamesRouter;