//객체
/*
자바스크립트 자료형 ---- 원시타입 (한번에 하나의 값 만 가질 수 있음)
                ㅣ- 비원시타입 (한번에 여러개의 값을 가질 수 있음) ex) 배열 함수 객체 ...
*/

//객채 생성방법 1- 객체 생성자 new 사용
let person = new Object();

//객체 생성방법 2- 객체 리터럴  {} 사용
let person2 = {
    name: "임수빈", //멤버
    age: "23",
    say: ()=>`안녕 나는 ${person2.name}` //객체안의 함수 = 메서드
};
//value 값에는 어떠한 자료형도 올 수 있음
console.log(person2.name) //프로퍼티 접근1-점표기법
console.log(person2.age)

console.log(person2["name"]) //프로퍼티 접근2-괄호 표기법(반드시 문자열 형태 " " 로 사용해야함)



function getPropertyValue(key){
    //괄호표기법은 이런 동적인 파라미터 전달받거나 지금 현재 키를 꺼내야할때 그 키가 고정되어있지않을때 주로 사용
    return person2[key];
}

console.log(getPropertyValue("age"))

//객체 프로퍼티 추가
person2.location = "한국"
person2["gender"]="여성"
console.log(person2)

//객체 프로퍼티 수정
person2.name = "임짱돌"
console.log(person2)

//객체가 const 여도 에러는 안남 객체 자체를 수정하는게 아닌 그 안의 값들을 수정하는것이기때문

//객체 프로퍼티 삭제
delete person2.gender; //실제 객체와 프로퍼티의 연결의 끊을뿐 메모리가 삭제되진않음
console.log(person2)

person2.location = null //메모리까지 날리는법
console.log(person2)

console.log(person2.say())


//in 연산자를 사용해 객체에 해당 프로퍼티가 있는지 확인할슈있음
console.log(`name: ${"name" in person2}`)
console.log(`gender: ${"gender" in person2}`)