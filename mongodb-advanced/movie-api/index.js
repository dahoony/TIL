const movies = require('./routes/movies');
const genres = require('./routes/genres');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

/** MongoDB Connect */
mongoose.connect('mongodb://localhost/movie-api',{ useNewUrlParser: true })
    .then(()=>console.log('Connected to MongoDB'))
    .catch(error => console.error(error.message));

    
/** Middlewares */
app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/movies',movies);

/** Server */
const port = process.env.PORT || 3000;

app.listen(port,()=> console.log(`Listening on port ${port}`));