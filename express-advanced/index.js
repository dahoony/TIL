const home = require('./routes/home');
const movies = require('./routes/movies');
const debug = require('debug')('app:startup');
// const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require("./middlewares/logger");
const auth = require("./middlewares/auth");
// const Joi = require("joi");
const express = require("express");
const app = express();

if(app.get('env') === 'development'){
    debug('MORGAN을 실행합니다.');
    app.use(morgan('dev'));
}

//json으로 알아서 처리하게 해줘야한다.
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(logger);
app.use(auth);
app.use('/api/movies',movies);
app.use(home);

app.set('view engine','pug');
app.set('views','./views');//default 설정이 이렇게 되있다. 하지만 폴더명을 바꿀경우 이 set을 해줘야한다.

//port 설정
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
