/** ES5 for() */

var numbers = [1,2,3];
var dNumbers = [];

for(var i=0;i<numbers.length;i++){
    dNumbers.push(numbers[i]*2);
}

/** ES6 map */
var tNumbers = numbers.map(function(number){
    return number*3;
});

console.log(tNumbers);

/** 실제 사용 예시 */
var posts =[
    {title:'Happy',content:'Hacking'},
    {title:'Multi',content:'Campus'},
]

var frontElement = posts.map(function(post){
    return `<h1>${post.title}</h1><strong>${post.content}</strong>`;
});

console.log(frontElement);

/** 실습 1 */
var images = [
    {h:'10px',w:'20px'},
    {h:'54px',w:'20px'},
    {h:'1098px',w:'2230px'},
]

var heights = images.map(function(image){
    return image.h;
});
console.log(heights);

/** 실습 2 */
var trips =[
    {distance:34,time:10},
    {distance:3344,time:1},
    {distance:314,time:1930},
]
var speeds = trips.map(function(trip){
    return trip.distance / trip.time;
});

console.log(speeds);

/** 실습 3 */
// object.key === object[key]
function pluck(array,property){
    
    return array.map(function(paint){
        return paint[property];
    });
}

var paints = [
    {color:'red', price: 100},
    {color:'blue', price: 10},
    {color:'brown', price: 130},
    {color:'green', price: 150},
];

console.log(pluck(paints, 'color'));