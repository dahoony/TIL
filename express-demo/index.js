/** express 적용 */
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('dahoon');
});

app.get('/api',(req,res)=>{
    const data = {
        ceo:'john',
        director:'dahoony'
    };

    res.send(data);
});

app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
});

app.get('/api/posts/:year',(req,res)=>{
    res.send(req.query);
});

// port 번호
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});