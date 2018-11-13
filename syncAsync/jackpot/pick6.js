const _ = require('underscore');
//실제 데이터
const numbers = _.range(1,46);
const realNumbers = _.sample(numbers,6).sort((a,b)=>a-b);
const bonusNumber = 30;

const realLottoInfo = {
    realNumbers:realNumbers,
    bonusNumber:bonusNumber
}

module.exports = realLottoInfo;