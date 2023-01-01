const { Videogame, Genre } = require('../db');
const { YOUR_API_KEY } = process.env;
const axios = require('axios');

const create_videogame = async (req, res)=> {
    try {
        const { name, genres, description, released, rating, platforms, background_image } = req.body;
        const newVideogame = await Videogame.create({ name, genres, description, released, rating, platforms, background_image });
        await newVideogame.addGenre(genres);
        res.status(200).json({ success: 'Created'});   
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const get_videogames = async (req,res)=> {
    const { name } = req.query;

    if (name) {
        res.send('NOT IMPLEMENTED YET: SEARCH BY NAME');
    } else {
        //**************** buscar todo lo de la db
        const dbData = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ['id','name'],
                through:{
                    attributes:[] // No quiero datos de la tabla intermedia
                }
            },
        });
        console.log(dbData);

        const mapDbData = dbData.map((videogames)=> {
            return {
                id: videogames.id,
                name: videogames.name, 
                genres: videogames.genres, // Ver 
                released: videogames.released, 
                rating: videogames.rating, 
                platforms: videogames.platforms, 
                image: videogames.background_image
            };
        })
    
        // Videogame.findAll().then((response)=> {
        //   console.log(response);
        // });

        //**************** buscar todo lo de la api
        const apiData = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);

        const mapApiData = apiData.data.results.map((videogames)=> {
            return {
                id: videogames.id,
                name: videogames.name, 
                genres: videogames.genres.map((genre)=> {
                    return{
                        id: genre.id,
                        name: genre.name,
                    };
                }),
                released: videogames.released, 
                rating: videogames.rating, 
                platforms: videogames.platforms.map(e => e.platform.name), 
                image: videogames.background_image
            };
        })


        //axios
        //  .get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`)
        //  .then((response)=> console.log(response.data));

        //**************** juntar todo y mandar
        const response = [...mapDbData, ...mapApiData];

        res.status(200).json(response);
    }
};

module.exports = { create_videogame , get_videogames };