//배열 - 비원시 자료형 
//배열 생성법1- 배열 생성자 new
let arr = new Array();
//배열 생성법2- 배열 리터럴 []
let arr2 = [1,2,3,4]; // 다른 타입도 들어갈 수 있음

console.log(arr2)
console.log(arr2[1])

arr2.push(5)
console.log(arr2)
console.log(arr2.length) //배열도 객체기때문에 점표기법 사용