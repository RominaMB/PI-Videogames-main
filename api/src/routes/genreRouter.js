const { Router } = require('express');
const { Genre } = require('../db');

const genreRouter = Router();

genreRouter.get('/', async (req,res)=>{
    const arr = await axios.get
})

module.exports = genreRouter;