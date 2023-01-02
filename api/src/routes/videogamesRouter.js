const { Router } = require('express');
const { create_videogame, get_videogames, get_vg_by_id } = require('../controllers/videogamesController')
const { validationMiddleware } = require('../middlewares');

const videogamesRouter = Router();

const validationId = (req,res,next)=> {
    const { id } = req.params;
    if (id.length > 5) {
        req.typeId = "uuid";
    } else {
        req.typeId = "number";
    }
    next();
};

videogamesRouter.get('/', get_videogames);
videogamesRouter.post('/', validationMiddleware, create_videogame);
videogamesRouter.get('/:id', validationId, get_vg_by_id);


module.exports = videogamesRouter;