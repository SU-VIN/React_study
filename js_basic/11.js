// //비 구조화 할당
// let arr = ["one", "two","three"]
// // let one = arr[0]
// // let two = arr[1]
// // let three = arr[2]


// //비 구조화 할당
// let [one,two,three] = arr;
// console.log(one,two,three)

//배열의 비구조 할당 - swap
let a = 10;
let b = 20;
[a, b]=[b, a];
console.log(a,b);

//객체의 비구조 할당 (키값을 기준으로)
let object = {one:"one",two:"two",three:"three",name:"임수빈"};

// let one = object.one;
// let two = object.two;
// let three = object.three;

let {name:myName,one,two,three}=object;
console.log(one,two,three,myName)