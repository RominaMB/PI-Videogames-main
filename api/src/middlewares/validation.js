const validationMiddleware = (req, res, next)=> {
    const { name, genres, description, released, rating, platforms, background_image } = req.body;
    if(!name) return res.status(400).json({error: "Missing Name"});
    if(!genres.length) return res.status(400).json({error: "Missing Genre"});
    if(!description) return res.status(400).json({error: "Missing Description"});
    if(!released) return res.status(400).json({error: "Missing Released"});
    if(!rating) return res.status(400).json({error: "Missing Rating"});
    if(!platforms) return res.status(400).json({error: "Missing Platforms"});
    if(!background_image) return res.status(400).json({error: "Missing Image"});
    next(); 
};

const validationId = (req,res,next)=> {
    const { id } = req.params;
    if (id.length > 5) {
        req.typeId = 'uuid';
    } else {
        req.typeId = 'number';
    }
    next();
};
module.exports = { validationMiddleware, validationId };