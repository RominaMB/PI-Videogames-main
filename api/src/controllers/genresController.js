const { Genre } = require('../db');
const { YOUR_API_KEY } = process.env;
const axios = require('axios');


const get_genres = async (req,res)=>{

    const storedGenres = await Genre.findAll();
        if (storedGenres.length < 1) {

            const genresApiData = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`);
            const mapGenresApiData = genresApiData.data.results.map((genres)=> {
                return {
                    id: genres.id,
                    name: genres.name
                }
            });
        
            const response = [...mapGenresApiData];
            res.status(200).json(response);
            Genre.bulkCreate(response); //El modelo ejecuta el metodo Bulk para crear en cantidad.

            
        } else {
        return res.send(storedGenres)
        }    
}

module.exports = {  get_genres };