/** ES5 something like class.. */
// function Car(options){
//     this.title = options.title;
// }

// Car.prototype.drive= function(){
//     return 'Vroom';
// }

// var car = new Car({title:'Genesis'});

/** ES6  */
class Car{
    constructor({title}){
        this.title = title;
    }

    drive(){
        return 'Vroom';
    }
}

class Audi extends Car{
    constructor(options){
        super(options);
        this.color = option.color;
    }

    honk(){
        return 'Bammmmm';
    }
}

const car = new Car({title:'A6'});

console.log(car);
console.log(typeof car);

/** 실습 1 */
class Monster{
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }
}


/** 실습 2 */

class Snake extends Monster{
    constructor(options){
        super(options);
    }
    bite(monster){
        monster.health -= 10;
    }
}

let monster = new Monster({name:'dahoon'});
let snake = new Snake({name:'snake'});
console.log(monster);
snake.bite(monster);
console.log(monster);


