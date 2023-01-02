const { Router } = require('express');
const { create_videogame, get_videogames, get_vg_by_id } = require('../controllers/videogamesController')
const { validationMiddleware, validationId } = require('../middlewares/validation');

const videogamesRouter = Router();

videogamesRouter.get('/', get_videogames);
videogamesRouter.post('/', validationMiddleware, create_videogame);
videogamesRouter.get('/:id', validationId, get_vg_by_id);


module.exports = videogamesRouter;