const http = require('http');

function getLottoData(drwNo) {
    const url = `http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;

    let lottoData = {};

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let buff = '';
            res.on('data', chunck => {
                buff += chunck;
            });

            res.on('end', () => {
                lottoData = JSON.parse(buff);
                const lottoInfo = {
                    bnusNo: lottoData.bnusNo,
                    lottoNums: [
                        lottoData.drwtNo1,
                        lottoData.drwtNo2,
                        lottoData.drwtNo3,
                        lottoData.drwtNo4,
                        lottoData.drwtNo5,
                        lottoData.drwtNo6
                    ]
                }
                resolve(lottoInfo);
            })
        });
    });
}

//Math.floor(Math.random()*45+1)
module.exports = getLottoData;
