//크롬의 js엔진인 v8을 이용하여서 js를 웹브라우저 말고도 이용할수있게만듬
//즉 node.js==js의 실행환경, Js의 런타임

const calc = require("./2")

console.log(calc.add(1,2))
console.log(calc.add(2,4))
console.log(calc.sub(10,2))