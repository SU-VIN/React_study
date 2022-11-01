//calc 

const add=(a,b)=>a+b;
const sub = (a,b)=>a-b;

//객체단위로 모듈을 내볼낼 수 있음
module.exports={
    moduleName: "calc module",
    add: add,
    sub: sub
};

//exports , require은 node함수임