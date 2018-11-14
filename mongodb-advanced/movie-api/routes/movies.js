const { Movie, validateMovie } = require('../models/movie');
const express = require('express');
const router = express.Router();

/** Server */

router.get('/', async (req, res) => {
    const movies = await Movie.find().sort('name');

    res.send(movies);
});

router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send('Not found Moive');

    res.send(movie);
});

router.post('/', async (req, res) => {
    const { error } = validateMovie(req.body);

    if (error) return res.status(400).send(error.message);

    let movie = new Movie({ title: req.body.title, mainActor: req.body.mainActor });

    try {
        movie = await movie.save();
        res.send(movie);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.patch('/:id', async (req, res) => {
    const { error } = validateMovie(req.body);

    if (error) return res.status(400).send(error.message);

    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            mainActor: req.body.mainActor
        }, { new: true });

        if(!movie) return res.status(404).send('Not found genre');

        res.send(movie);
    }catch(error){
        res.status(400).send(error.message);
    }
});

router.delete('/:id',async (req,res)=>{
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if(!movie) return res.status(404).send('Not found genre');

    res.send(movie);
});

module.exports = router;