//삼항 연산자
let a= 3
if(a>=0){
    console.log("양수")
}else{
    console.log("음수")
}

a>=0?console.log("양수"):console.log("음수")


let b = []
b.length===0?console.log("빈 배열"):console.log("안 빈 배열")

let arrayStatus = b.length===0?"빈 배열":"안 빈 배열"

//중첩 삼항 연산자
let score = 100;
let result = score>=90?"A+":score>=50?"B+":"F"
console.log(result)