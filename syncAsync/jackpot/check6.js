const realInfos = require('./pick6');
const getLottoData = require('./get6');


getLottoData(832)
    .then(result => {
        const lottoNumbers = result.lottoNums;
        const lottoBnusNo = result.bnusNo;
        console.log(lottoNumbers);
        let count = 0;
        lottoNumbers.forEach(lottoNum => {
            let sameNumber = realInfos.realNumbers.find(realNum => {
                return realNum === lottoNum;
            })
            if (sameNumber) count++;
        });
        console.log(count);
        console.log(realInfos.realNumbers);
        console.log(realInfos.bonusNumber);
        console.log(lottoBnusNo);
        switch (count) {
            case 6:
                console.log('1등');
                break;
            case 5:

                if (realInfos.bonusNumber === lottoBnusNo)
                    console.log('2등');
                else
                    console.log('3등');

                break;
            case 4:
                console.log('4등');
                break;
            case 3:
                console.log('5등');
                break;
            default:
                console.log('꽝');
                break;
        }
    });