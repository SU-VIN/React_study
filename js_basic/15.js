//async & await - 직관적인 비 동기 처리 코드 작성하기
//async? - promise처럼 비동기를 다루는 기능이자 Promise를 좀 더 쉽게 사용가능하게 만듬

function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}


//promise의 resolve값을 반환함
// async function helloAsync(){
//     return delay(3000)
//                 .then(()=>{
//                     return "hello Async"
//                 })
// }

//위의 코드를 await사용
async function helloAsync(){
    //await 키워드가 붙은 함수의 호출은 이 함수가 끝나기전까지
    //그아래 코드를 실행시키지 않는다. 동기적임 
    //async안에서만 사용 가능
    await delay(3000);
    return "hello Async"
}

console.log(helloAsync()) //promise객체가 그대로 출력됨




// function main(){
//     helloAsync()
//     .then((res)=>{
//         console.log(res)
//     })
// }

async function main(){
    const res = await helloAsync()
    console.log(res)
}
main()