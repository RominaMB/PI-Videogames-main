const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genreRouter = require('./genreRouter')
const videogameRouter = require('./videogameRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req,res)=> {
    res.send("Hola Mundo")
})

router.use('/genre', genreRouter)
router.use('/videogame', videogameRouter)

module.exports = router;
