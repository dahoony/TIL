exports.sayHelloKor = () => {
  return "안녕!";
};

exports.sayHelloEng = () => {
  return "Hi!";
};

exports.sayHelloSwedish = () => {
  return "Hej";
};


/** 다른 방법 */

// module.exports = {
//   sayHelloKor(){
//     return "안녕!";
//   },
//   sayHelloEng(){
//     return "Hi!";
//   },
//   sayHelloSwedish(){
//     return "Hej";
//   }
// }