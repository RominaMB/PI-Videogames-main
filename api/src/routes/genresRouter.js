const { Router } = require('express');
const { Genre } = require('../db');
const { YOUR_API_KEY } = process.env;
const axios = require('axios');



const genresRouter = Router();

genresRouter.get('/', async (req,res)=>{
    const { name } = req.query;

    if (name) {
        res.send('NOT IMPLEMENTED YET: SEARCH BY GENRE NAME');
    } else {
    const genresApiData = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`);
    const mapGenresApiData = genresApiData.data.results.map((genres)=> {
        return {
            id: genres.id,
            name: genres.name
        }
    });
    const response = [...mapGenresApiData];
    res.status(200).json(response);
    
    Genre.bulkCreate(mapGenresApiData);
    }
});

module.exports = genresRouter;