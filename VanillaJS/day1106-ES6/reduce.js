/** ES5 for() */
var numbers = [10,20,30];
var sum = 0;

for(var i=0;i<numbers.length;i++){
    sum+=numbers[i];
}

/** ES6 reduce */
var result = numbers.reduce(function(acc,number){
    return acc + number;
},0);
console.log(result);

/** map vs reduce */
var myColors = [
    {color:'black'},
    {color:'red'},
    {color:'gold'},
];

var onlyColors = myColors.map(function(color){
    return color.color;
});

var onlyColors2 = myColors.reduce(function(acc,color){
    acc.push(color.color);
    return acc;
},[]);

console.log(onlyColors2);

/** 실제 활용 예시 */
// 올바르게 닫힌 괄호를 찾아라!
function isGoodParens(string){
    var strings = string.split('');
    var i = 0;
    var left =0;
    var right =0;
    var isGood = strings.reduce(function(acc,str){
        i++;
        if(i===1 && str === ')'){
            acc = false;
        }
        
        if(str === '('){
            left++;
        }else{
            right++;
        }

        if(left === right){
            acc = true;
        }else{
            acc = false;
        }
        return acc;
    },false);
    return isGood;
}

/**
 * function isGoodParens(string){
 *  var array=string.split('');
 *  return !array.reduce(function(acc,char){
 *      if(acc <0){
 *          return acc;
 *      }else if(char ==='('){
 *          ++acc;
 *      }else {
 *          --acc;
 *      }
 *  })
 * }
 * 
 */
/** 실습 1 */
var trips = [
    {distance:34},
    {distance:10},
    {distance:100},
];

var totalDistance = trips.reduce(function(acc,trip){
    return acc+trip.distance;
},0)
console.log(totalDistance);

/** 실습 2 */
var desks =[
    {type: 'Sitting'},
    {type: 'Standing'},
    {type: 'Sitting'},
    {type: 'Sitting'},
    {type: 'Standing'},
]

var deskTypes = desks.reduce(function(acc,desk){
    if(desk.type === 'Sitting'){
        acc.sitting++;
    }else{
        acc.standing++;
    }
    
    return acc;
},{sitting:0,standing:0});

console.log(deskTypes);
/** 실습 3 */

function unique(array){
    var preresult = array.reduce(function(acc,number){
        acc[number-1]=number;
        return acc;
    },[]);

    return preresult.filter(function(n){
        return n != undefined;
    });
}

var numbers = [4,1,3,2,2,1,3,3,4,4,4,6,4,3,7,8,10];

console.log(unique(numbers));//[1,2,3,4];