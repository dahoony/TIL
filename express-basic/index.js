const express = require("express");
const app = express();

//json으로 알아서 처리하게 해줘야한다.
app.use(express.json());

const movies = [
  { id: 1, title: "태극기 휘날리며" },
  { id: 2, title: "해리포터" },
  { id: 3, title: "실미도" }
];

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
  const movieSelect = movies.find(movie => {
    return movie.id === parseInt(req.params.id);
  });

  if (!movieSelect) {
    res.status(404).send('찾는 영화가 없습니다.');
  } else {
    res.send(movieSelect);
  }
});

// /** /api/movies/1 CREATE*/
app.post('/api/movies',(req,res)=>{
    const movie = {
        id:movies.length+1,
        title:req.body.title
    };
    movies.push(movie);
    res.send(movie);
});

// /** /api/movies/1 UPDATE*/
// app.put();

// /** /api/movies/1 DESTROY*/
// app.delete();

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
