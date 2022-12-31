const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genresRouter = require('./genresRouter')
const videogamesRouter = require('./videogamesRouter')

const router = Router(); // main router

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req,res)=> {
    res.send("Hola Mundo")
})

router.use('/genres', genresRouter)
router.use('/videogames', videogamesRouter)

module.exports = router;
