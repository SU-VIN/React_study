//단락회로 평가
console.log(true && true)

console.log(true || false)

const getName = (person)=>{
    if(!person){
        return "객체가 아닙니다."
    }   
    return person.name;
}
//단락회로 평가로 좀 더 간결하게.
const getName2 = (person)=>{
    const name= person && person.name
    return name || "객체가 아닙니다"
}

let person;
const name = getName2(person)
console.log(name)