const Joi = require('joi');
const mongoose = require('mongoose');

/** Modeling */
const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength:2,
        maxlength:255
    },
    release:{
        type:Date,
        default:Date.now()
    },
    mainActor:{
        type:String,
        minlength:1
    }
})

const Movie = mongoose.model('Movie',movieSchema);

/** 유효 검사 */
function validateMovie(movie){
    const schema = {
        title:Joi.string().min(2).max(255).required(),
        release:Joi.date().min(Date.now()),
        mainActor:Joi.string().min(1)
    }
    return Joi.validate(movie,schema);
}

exports.Movie = Movie;
exports.validateMovie = validateMovie;