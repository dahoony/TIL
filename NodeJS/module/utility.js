
console.log("1번만 출력됨");

module.exports = function(numberToSum=[]){
    let sum = 0;
    numberToSum.forEach(number => sum += number);
    return sum;
};

console.log("______");
