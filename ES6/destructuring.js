/** ES5 Object */
var computer ={
    model: 'LG gram',
    year:2017,
}

// var model = computer.model;
// var year = computer.year;

/** ES6 Object */
const laptop = {
    model: 'Macbook Air',
    year: 2018,
}

const {model,year} = laptop;

/** ES5 function */
var saveFile = {
    extension: 'jpg',
    name:'profile',
    size:29847,
}

function fileSummary(files){
    return `${file.name},${file.extension} 의 크기는 ${file.size}입니다.`;
}

/** ES6 function */
const myFile ={
    extension: 'jpg',
    name:'profile',
    size:29847,
}

function summary({extension, name, size}){
    return `${name},${extension} 의 크기는 ${size}입니다.`;
}

/** ES6 Array */
const companies = [
    'Google',
    'IBM',
    'Amazon',
    'Apple'
]

const [name] = companies;
const [name1,name2,name3] = companies;

console.log(name) //Google,
console.log(name1,name2,name3)//Google, IBM, Amazon

const {length}=companies;
console.log(length);//4

const [one, ...rest] = companies;
console.log(one,rest);//Google [ 'IBM', 'Amazon', 'Apple' ]

/** ES6 Array & Object */
const wannaGo = [
    {name:'Google',location:'Mountain View'},
    {name:'Facebook',location:'Menlo Park'},
    {name:'Apple',location:'Cupertino'}
];

let [company] = wannaGo;
[{location}] = wannaGo;

/** 실제 적용 예시 */

const points = [
    [7,12],
    [-20,3],
    [8,0]
];

points.map(([x,y])/** 같지않을경우에는 pair */ => {//key, value 변수가 똑같을 때 사용가능.
    // const x = pair[0];
    // const y = pair[1];
    // const [x, y] = pair;
    return {x:x,y:y};
})

function signUp({username, password, email}){
    //Create User


}

const user = {
    username:'neo',
    password:'123123',
    email:'dfj@naver.com'
}

signUp(user);


/** 실습 1 */
const profile = {
    title:'Engineer',
    department:'Blockchain'
};

function isEngineer({title,department}){
    return title === 'Engineer' && department==='Blockchain';
}

/** 실습 2 */
const classes = [
    ['실전 DApp','9am','Mr.john'],
    ['React','1pm','neo'],
    ['Capstone','3pm','multicampus']
]

//

const classAsObject = classes.map(([subject, time, teacher]) => {
    return {subject,time,teacher};
})