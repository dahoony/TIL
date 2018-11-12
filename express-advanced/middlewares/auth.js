function auth(req,res,next){
    console.log('로그인 인증 진행중..');
    next();
}

module.exports = auth;