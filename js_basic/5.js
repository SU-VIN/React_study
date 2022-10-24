//반복문
for(let i =0;i<5;i++){
    console.log("임짱돌")
}

//객체 순회
let person = {
    name: "임수빈",
    age: 23,
    gender: "female"
}

//객체 키값으로 배열 만들기
let personKeys = Object.keys(person) //내장함수
console.log(personKeys)

for(let i=0;i<personKeys.length;i++){
    let curKey = personKeys[i];
    let curValue = person[curKey]   
    
    console.log(curValue)
    
}
//객체 value값으로 배열 만들기
let personVaules = Object.values(person)
console.log(personVaules)