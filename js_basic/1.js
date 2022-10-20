//함수표현식& 화살표 함수
//변수가 함수를 담을 수 있다.
let hello = function(){
    return "hello"
}// <- 함수 표현식!(무명함수를 만들어 변수에 담음)

function helloFunc(){
    return "hello"
}//<- 함수 선언식!
//함수 표현식과 선언식의 차이점은 호이스팅. 함수선언식은 프로그램 실행전 코드 최상단으로 올라감
//즉 함수선언식보다 상위 라인에 함수를 호출해도 문제없이 호출가능 하지면 표현식은 호이스팅이
//안되기때문에 함수표현식보다 상위 라인에 호출하면 에러 발생.


const helloTxext = hello();
console.log(helloTxext);

//함수표현식을 더 간략하게 만드는 방범 -> 화살표 함수 (이또한 호이스팅 대상 x)
let bye = ()=> "bye"