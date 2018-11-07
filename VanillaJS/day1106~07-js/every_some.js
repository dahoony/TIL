/** ES5 for() */
var computers = [
    {name: 'macbook-air',ram: 16},
    {name: 'gram',ram:8},
    {name: 'series9',ram:32},
];

var everyComputersAvailable = true;
var someComputerAvailable = false;

for(var i=0;i<computers.length;i++){
    if(computers[i].ram < 16){
        everyComputersAvailable = false;
    }else{
        someComputerAvailable = true;
    }
}

/** ES6 every */
var everyLaptopsAvailable = computers.every(function(computer){
    return computer.ram > 16;
});

var someLaptopsAvailable = computers.some(function(computer){
    return computer.ram > 16;
});

var names = [
    'alex',
    'bill',
    'chris',
]

//false;
names.every(function(name){
    return name.length > 4;
});

//true;
names.some(function(name){
    return name.length > 4;
});

/** 실제 활용 예시 */

/** 실습 1 */
var users =[
    {id:21,submit:true},
    {id:22,submit:false},
    {id:23,submit:true},
];

var allSubmited = users.every(function(user){
    return user.submit;
});//true;
console.log(allSubmited);

/** 실습 2 */
var requests = [
    {url:'/photos',status:'complete'},
    {url:'/albums',status:'pending'},
    {url:'/users',status:'failed'},
];

var inProgress = requests.some(function(request){
    return request.status === 'pending';
});

console.log(inProgress);

/** 실습 3 */