const { Videogame, Genre } = require('../db');
const { YOUR_API_KEY } = process.env;
const axios = require('axios');
const { Op } = require('sequelize');

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
        const resultsDb = await Videogame.findAll({
            where: {
                name: {
                [Op.iLike]:`%${name}%`,
                },
            },
            include: {
                model: Genre,
                attributes: ['id','name'],
                through:{
                    attributes:[] // No quiero datos de la tabla intermedia
                }
            },
        });
        const mapresultsDb = resultsDb.map((videogames)=> {
            return {
                id: videogames.id,
                name: videogames.name, 
                genres: videogames.genres, // Ver 
                released: videogames.released, 
                rating: videogames.rating, 
                platforms: videogames.platforms, 
                background_image: videogames.background_image
            };
        })

        const resultsApi = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${name}`);
        const mapresultsApi = resultsApi.data.results.map((videogames)=> {
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
                background_image: videogames.background_image
            };
        })

        res.status(200).json([...mapresultsDb, ...mapresultsApi].slice(0,15));

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

        const mapDbData = dbData.map((videogames)=> {
            return {
                id: videogames.id,
                name: videogames.name, 
                genres: videogames.genres, // Ver 
                released: videogames.released, 
                rating: videogames.rating, 
                platforms: videogames.platforms, 
                background_image: videogames.background_image
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
                background_image: videogames.background_image
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

const get_vg_by_id = async (req, res, next)=> {
    const { id } = req.params;
    if(req.typeId === 'uuid') {
        //Busco en db
        // const detailDb = await Videogame.findByPk(id);
        // res.status(200).json(detailDb);
        const detailDb = await Videogame.findOne({
            where: {
                id: id,
            },
            include: {
                model: Genre,
                attributes: ['id','name'],
                through:{
                    attributes:[] // No quiero datos de la tabla intermedia
                }
            },
        });
        res.status(200).json(detailDb);

    } else { 
        //Busco en api
        const detailApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
        const mapDetailApi = [detailApi.data].map((videogames)=> {
            return {
                id: videogames.id,
                name: videogames.name, 
                description: videogames.description,
                released: videogames.released, 
                rating: videogames.rating, 
                platforms: videogames.platforms.map(e => e.platform.name), 
                background_image: videogames.background_image,
                genres: videogames.genres.map((genre)=> {
                    return{
                        id: genre.id,
                        name: genre.name,
                    }
                })
            };
        })
        res.status(200).json(...mapDetailApi);
    }
};



module.exports = { create_videogame , get_videogames, get_vg_by_id };