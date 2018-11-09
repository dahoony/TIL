const Joi = require("joi");
const express = require("express");
const app = express();

//json으로 알아서 처리하게 해줘야한다.
app.use(express.json());

const movies = [
  { id: 1, title: "태극기 휘날리며" },
  { id: 2, title: "해리포터" },
  { id: 3, title: "실미도" }
];

const schema = {
    title: Joi.string()
      .min(3)
      .required()
  };

app.get("/", (req, res) => {
  res.send("happy hacking");
});

app.get("/:name", (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});

//CRUD
//CREATE READ UPDATE DESTROY
//POST   GET   PUT    DELETE

/** /api/movies ALL READ*/
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

/** /api/movies/1 ONE READ*/
app.get("/api/movies/:id", (req, res) => {
  const movieSelect = movies.find(movie => movie.id === parseInt(req.params.id));

  if (!movieSelect) return res.status(404).send("찾는 영화가 없습니다.");
  
  res.send(movieSelect);
});

// /** /api/movies/1 CREATE*/
app.post("/api/movies", (req, res) => {
  const result = Joi.validate(req.body, schema);
  // console.log('=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  // console.log(result);
  // console.log('=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

  if (result.error) return res.status(400).send(result.error.message);

  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
  movies.push(movie);
  res.send(movie);
});

// /** /api/movies/1 UPDATE*/
app.put("/api/movies/:id", (req, res) => {
  const result = Joi.validate(req.body, schema);

  if (result.error) return res.status(400).send(result.error.message);

  const movieSelect = movies.find(movie => movie.id === parseInt(req.params.id));

  if (!movieSelect) return res.status(404).send("찾는 영화가 없습니다.");

  const movieIndex = movies.indexOf(movieSelect);
  movies[movieIndex].title = result.value.title;
  res.send(movies);
});

// /** /api/movies/1 DESTROY*/
app.delete("/api/movies/:id", (req, res) => {
  const movieSelect = movies.find(movie => movie.id === parseInt(req.params.id));

  if (!movieSelect) return res.status(404).send("찾는 영화가 없습니다.");
  
  const movieIndex = movies.indexOf(movieSelect);
  movies.splice(movieIndex, 1);
  res.send(movieSelect);
  
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
