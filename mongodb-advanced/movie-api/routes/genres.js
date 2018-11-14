const {Genre, validate} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

/** Routes */

router.get('/', async (req,res)=>{
    const genres = await Genre.find().sort('name');

    res.send(genres);
});

router.get('/:id',async (req,res)=>{
    const genre = await Genre.findById(req.params.id);
    if(!genre) return res.status(404).send('찾는 영화가 없습니다.');

    res.send(genre);
});

router.post('/',async (req,res)=>{
    // joi에서 먼저 거른다.
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.message);
    
    // db에서 또 거른다.
    let genre = new Genre({name:req.body.name});
    try{
        genre = await genre.save();
        console.log(genre);
        res.send(genre);
    }catch(error){
        console.error(error.message);
    }
});

router.patch('/:id',async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, {
        name:req.body.name
    },{new: true});

    res.send(genre);
});

router.delete('/:id',async (req,res)=>{
    const genre = await Genre.findByIdAndDelete(req.params.id);

    if(!genre) return res.status(404).send('Not found genre');
    
    res.send(genre);
});

module.exports = router;