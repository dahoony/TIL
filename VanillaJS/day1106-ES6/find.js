/** ES5 for() */
var users = [
  { name: "Tony stark" },
  { name: "Steve Rogers" },
  { name: "Thor" },
];

var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Thor") {
    user = users[i];
    break;
  }
}

/** ES6 find() => 하나의 값만 가져온다.*/
user = users.find(function(findUser) {
  return findUser.name === "Thor";
});

/** More complex code */
function Car(model){
    this.model = model;
}

var cars = [
    new Car('Mercedes'),
    new Car('Ferrari'),
    new Car('BMW'),
    new Car('HK'),
];

var car = cars.find(function(car){
    return car.model === 'Ferrari';
});
console.log(car);

/** 실제 예시 */
const articles = [
    {id:1,title:'Motto',content:'HappyHacking'},
    {id:2,title:'My Personal Info',content:'HappyHacking'},
    {id:3,title:'Ruby vs Python',content:'HappyHacking'},
    {id:4,title:'Welcome to the',content:'HappyHacking'},
];


/** 실습1 */
var members = [
    {id:1,admin:false},
    {id:2,admin:false},
    {id:3,admin:true},
];

var admin = members.find(function(member){
    return member.admin;
});
console.log(admin);

/** 실습2 */
var accounts = [
    {balance: -10},
    {balance: 12},
    {balance: 0},
]

var account = accounts.find(function(account){
    return account.balance === 12;
});
/** 실습3 */

var laders = [
    {id:1,height:20},
    {id:3,height:25},
]


function findWhere(array, standard){
    var key = Object.keys(standard)[0];
    return array.find(function(lader){
        return standard[key] === lader[key];
    });
}

console.log(findWhere(laders,{id:3}));
