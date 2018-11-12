// express crud 연습
const express = require('express');
const Joi = require('joi');
const app = express();

//json으로 받겟다.
app.use(express.json());

// db 역할
const users = [];

//schema
const schema = {
    name : Joi.string().min(1).required(),
    email : Joi.string().min(5).required(),
    age : Joi.number().min(3).required()
}

app.get('/',(req,res)=>{
    res.send('main~');
});

//crud
app.post('/api/users',(req,res)=>{
    const result = Joi.validate(req.body,schema);
    if(result.error) return res.status(400).send(result.error.message);

    const user = {
        id:users.length+1,
        name : req.body.name,
        email : req.body.email,
        age : req.body.age
    };

    users.push(user);
    res.send(user);
});

app.get('/api/users',(req,res)=>{
    res.send(users);
});

app.get('/api/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = getUser(users,parseInt(id));
    if(!user){
        return res.status(404).send('찾는 회원이 없습니다.');
    }

    res.send(user);
}); 

app.put('/api/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = getUser(users,parseInt(id));

    if(!user){
        return res.status(404).send('찾는 회원이 없습니다.');
    }

    const result = Joi.validate(req.body,schema);

    if(result.error) return res.status(400).send(result.error.message);

    user.name = req.body.name;
    user.email = req.body.email;
    user.age = req.body.age;

    res.send(user);
});

app.delete('/api/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = getUser(users,parseInt(id));

    if(!user){
        return res.status(404).send('찾는 회원이 없습니다.');
    }

    const userIndex = users.indexOf(user);
    res.send(users.splice(userIndex,1));
});

// getUser
function getUser(users, id){
    return users.find(user => user.id === id);
}

//port setting
const port = process.env.PORT || 9000;
app.listen(port,()=>{
    console.log(`This port is ${port}`);
});