function log(req,res,next){
    console.log('모든 요청이 올때마다 로그를 남긴다.');
    //다음 놈이 알아서 넘어가게...?
    next();
}

module.exports = log;