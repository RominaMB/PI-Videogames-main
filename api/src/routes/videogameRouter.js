const { Router } = require('express');
const { Videogame } = require('../db');

const videogameRouter = Router();

videogameRouter.get('/', async (req,res)=>{
    const arr = await axios.get
})

module.exports = videogameRouter;