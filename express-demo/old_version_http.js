const http = require('http');

const data = {
    ceo:'john',
    director:'dahoony'
};

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('root page');
        //더이상의 작업이 없을경우 end를 해줘야한다.
        res.end();
    }
    if(req.url === '/api'){
        res.write(JSON.stringify(data));
        res.end();
    }
});

// port 번호
server.listen(3000);
console.log('Listening on port 3000');