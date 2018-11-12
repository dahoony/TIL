const express = require('express');
const router = express.Router();
const Joi = require("joi");

const movies = [
    { id: 1, title: "태극기 휘날리며" },
    { id: 2, title: "해리포터" },
    { id: 3, title: "실미도" }
];

//CRUD
//CREATE READ UPDATE DESTROY
//POST   GET   PUT    DELETE

/** /api/movies ALL READ*/
router.get("/", (req, res) => {
    res.send(movies);
});

/** /api/movies/1 ONE READ*/
router.get("/:id", (req, res) => {
    const movieSelect = getMovie(movies, parseInt(req.params.id));

    if (!movieSelect) return res.status(404).send("찾는 영화가 없습니다.");

    res.send(movieSelect);
});

// /** /api/movies/1 CREATE*/
router.post("/", (req, res) => {
    const { error } = validateMovie(req.body);
    // const result = validateMovie(req.body).error;

    // const result = validateMovie(req.body);

    if (error) return res.status(400).send(error.message);

    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };
    movies.push(movie);
    res.send(movie);
});

// /** /api/movies/1 UPDATE*/
router.put("/:id", (req, res) => {
    const movieSelect = getMovie(movies, parseInt(req.params.id));

    if (!movieSelect) return res.status(404).send("찾는 영화가 없습니다.");

    const result = validateMovie(req.body);

    if (result.error) return res.status(400).send(result.error.message);

    const movieIndex = movies.indexOf(movieSelect);
    movies[movieIndex].title = result.value.title;
    res.send(movies);
});

// /** /api/movies/1 DESTROY*/
router.delete("/:id", (req, res) => {
    const movieSelect = getMovie(movies, parseInt(req.params.id));

    if (!movieSelect) return res.status(404).send("찾는 영화가 없습니다.");

    const movieIndex = movies.indexOf(movieSelect);
    movies.splice(movieIndex, 1);
    res.send(movieSelect);
});

// schema and validate 설정하는 함수(유효성 검사)

function validateMovie(movie) {
    const schema = {
        title: Joi.string()
            .min(3)
            .required()
    };

    return Joi.validate(movie, schema);
}

// id로 movie를 get하는 함수
function getMovie(movies, id) {
    return movies.find(movie => movie.id === id);
}

module.exports = router;