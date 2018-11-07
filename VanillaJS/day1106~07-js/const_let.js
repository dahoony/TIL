/** ES5 */
var name = '최다훈';

var title = 'software developer';

var workHour = '10am to 5pm';

function count (targetString){
    var characters = ['a','e','i','o','u'];

    var number =0;

    for(var i=0;i<targetString.length;i++){
        if(characters.includes(targetString[i])){
            number++;
        }
    }
    return number;
}

/** ES6 */
const name = '최다훈';

let title = 'software developer';

let workHour = '10am to 5pm';

function count (targetString){
    const characters = ['a','e','i','o','u'];

    const number = targetString.split('').reduce(function(acc,chr){
        if(characters.includes(chr)){
            acc++;
        }
        return acc;
    },0);
    return number;
}