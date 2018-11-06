/** ES5 for() */
var products = [
    {name:'banana',type:'fruit'},
    {name:'carrot',type:'vegetable'},
    {name:'apple',type:'fruit'},
    {name:'eggplant',type:'vegetable'},
    {name:'tomato',type:'fruit'},
];

var fruits = [];
for(var i=0;i<products.length;i++){
    if(products[i].type === 'fruit'){
        fruits.push(products[i]);
    }
}

/** ES6 filter */
var vegetables = products.filter(function(product){
    return product.type==='vegetable';
});

console.log(vegetables);
/** 실제 활용 예시 */

/** 실습 1 */
var numbers = [1,54,23,2,53,4,5];
var bigNumbers = numbers.filter(function(number){
    return number > 50;
});

console.log(bigNumbers);

/** 실습 2 */
var users = [
    {id:1,admin:true},
    {id:2,admin:false},
    {id:3,admin:true},
    {id:4,admin:true},
    {id:5,admin:false},
]

var admins = users.filter(function(user){
    return user.admin;
});
console.log(admins);

/** 실습 3 */
var nums = [10,20,30];

function reject(array,iterFunction){
    return array.filter(function(element){
        return !iterFunction(element);
    });
}

var lessThan15  = reject(nums, function(number){
    return number > 15;
});

console.log(lessThan15);