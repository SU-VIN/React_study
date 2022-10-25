//truthy & falsy 참같은 참, 거짓같은 거짓
let a = ""

if(a){
    console.log("TRUE")
}else{
    console.log("FALSE")
}
//빈문자열일땐 false 아닐댄 true
//js는 자신만의 기준으로 boolean이 아닌 값들의 true false를 정함


const getName = (person)=>{
    if(!person){
        return "객체가 아닙니다."
    }
    return person.name
}

let person = {name:"임수빈"}
const name = getName(person)

console.log(name)