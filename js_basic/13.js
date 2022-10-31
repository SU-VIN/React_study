//동기 & 비동기
/*동기 방식의 처리- 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.
동기의 문제점- 하나의 작업이 너무 오래 걸리게 될시, 모든 작업이 오래 걸리는 하나의 작업이 종료되기
전까지 올스탑 되기 때문에 전반적인 흐름이 느려진다.

멀티쓰레드로 나눌 수 있지만 자바스크리느는 싱글 쓰레드로 동작함 
이 싱글 쓰레드 방식을 극복하기위해 비동기 바익 사용.

비동기 방식의 처리- 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함
콜백함수를 실행시켜 비동기방식의 코드들이 끝났는지를 확인
*/

function taskA(){
    console.log("A작업 끝")
}
taskA();


function taskAasy(a,b,cb){
    //타이머 만들어 주는 내장 비동기 함수
    setTimeout(()=>{
        //res는 지역상수라 밖으로 못나감 그럼 어케 해줘야함?
        const res = a+b;
        cb(res)
    },3000)
}


function taskBasy(a,cb){
    setTimeout(() => {
        const res = a*2;
        cb(res)
    }, 1000);
}

function taskCasy(a,cb){
    setTimeout(() => {
        const res = a*(-1)
        cb(res)
    }, 2000);
}

// taskAasy(3,4,(res)=>{console.log(`A+B=${res}`)});
// taskBasy(7,(res)=>{console.log(`task B = ${res}`)})
// taskCasy(14,(res)=>{console.log(`task C = ${res}`)})

//비동기의 비동기
taskAasy(4,5,(a_res)=>{
    console.log("A reslut :",a_res)
    taskBasy(a_res,(b_res)=>{
        console.log("B result :",b_res)
        taskCasy(b_res,(c_res)=>{
            console.log("C result :",c_res)
        })
    })
})


console.log("코드 끝")



/* 

js엔진은 크게 heap, call stack 구성요소로 이루어져있음.
heap = 변수나 상수의 사용자의 메모리를 저장함 동기 비동기 모두 사용
call stack = 우리가 작성한 코드에 따라서 호출 스택을 쌓는다

프로그램의 종료? call stack 에서 main context 가 삭제될때
*/