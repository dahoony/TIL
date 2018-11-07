/** Rest 나머지 */

const addNumbers = (a,b,c,d,e) =>{
    const numbers = [a,b,c,d,e];
    return numbers.reduce((acc,number)=>{
        return acc += number;
    },0);
};

/** rest */
const addAll = (...numbers) =>{
    return numbers.reduce((acc,number)=>{
        return acc += number;
    },0);
}

/** speread => 펼친다고 생각하면됨 ([10,10,10]) => (10,10,10)*/
let defaultColors = ['red','blue','green','black'];
let myColors = ['black','white','navy'];
let iphoneColors = ['rose gold','space gray'];

let palette = defaultColors.concat(myColors);

palette = [...defaultColors,...myColors,...iphoneColors];

/** 실습 */
const showShoppingList = (...items) =>{
    if(items.indexOf('water')<0){
        return ['milk',...items];
    }
};

/** 실제 활용 예시 */
let MathLibrary = {
    caculateProduct(a,b){
        return a*b;
    }
}

MathLibrary = {
    multiply(a,b){
        return a*b;
    },
    caculateProduct(...args){
        console.log('Please use method "multiply" instead :)');
        return this.multiply(...args);
    }
};

/** 실습1 */
const join = (array1,array2)=>{
    return array1.concat(array2);
};
// =>
const join = (array1,array2)=>{
    return [...array1,...array2];
}

/** 실습2 */
const unshift = (array,a,b,c,d,e) =>{
    return [a,b,c,d,e].concat(array);
}

// =>
const unshift = (array,...args) =>{
    return [...array,...args];
}