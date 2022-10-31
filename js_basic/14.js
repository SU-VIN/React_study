//promise - 콜백 지옥에서 탈출하기
/*
비동기 작업이 가질 수 있는 3가지 상태

pending(대기상태) -  비동기가 실행중이거나 실행 할 수도없는  문제가 발생하였을때   
  ㅣ_ Fulifilled(성공) - 비동기 작업이 우리가 의도한대로 정삭적으로 작용 resolve(해결) 했다함
  ㅣ_ Rejected(실패) - 비동기 작업이 모종의 이유로 실패 reject(거부) 했다함

  비동기 작업은 한번 작업이 성공||실패하고 난후 끝남.
*/

//resolve, reject 는 콜백함수
function isPositive(num,resolve,reject){
    setTimeout(() => {
        if(typeof num ==="number"){
            //성공 -> resolve
            resolve(num>=0?"양수":"음수")
            
        }else{
            //실패 -> reject
            reject("주어진 값이 숫자형이 아닙니다.")
        }
    }, 2000);
}


// isPositive('10',(res)=>{
//     console.log("성공적으로 수행됨:",res)
// },(err)=>{
//     console.log("실패 하였음:",err)
// })

//promise 사용
//어떤 함수가 promise를 반환한다는것은 이함수는 비동기 작업을 하고 그 값을 promise 객체로 반환받아 사용
function isPositiveP(num){
    const executor = (resolve,reject)=>{ //executor==실행자
        setTimeout(() => {
            if(typeof num ==="number"){
                //성공 -> resolve
                console.log(num);
                resolve(num>=0?"양수":"음수")
                
            }else{
                //실패 -> reject
                reject("주어진 값이 숫자형이 아닙니다.")
            }
        }, 2000);
    }

    const asyncTask = new Promise(executor)
    return asyncTask
}
const res = isPositiveP(101);

res.then((res)=>{console.log("작업 성공:", res)})
 .catch((err)=>{"작업 실패:",err})


//promise 로 비동기 구현해보기.
 function taskAasy(a,b){
     return new Promise((resolve,reject)=>{
            //타이머 만들어 주는 내장 비동기 함수
    setTimeout(()=>{
        //res는 지역상수라 밖으로 못나감 그럼 어케 해줘야함?
        const res = a+b;
        resolve(res)
    },3000)
     })

}


function taskBasy(a){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const res = a*2;
            resolve(res)
        }, 1000);
    })

}

function taskCasy(a){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const res = a*(-1)
            resolve(res)
        }, 2000);
    })

}

//then chaning
// taskAasy(5,1)
//     .then((a_res)=>{
//         console.log("A reslut:",a_res)
//         return taskBasy(a_res)
//     })
//     .then((b_res)=>{
//         console.log("B reslut:",b_res)
//         return taskCasy(b_res)
//     })
//     .then((c_res)=>{
//         console.log("C result:",c_res)
//     })

const bPromiseResult= taskAasy(5,1)
    .then((a_res)=>{
        console.log("A reslut:",a_res)
        return taskBasy(a_res)
    });

console.log("이것은 동기")
console.log("이것은 동기")
console.log("이것은 동기")
console.log("이것은 동기")
console.log("이것은 동기")

    bPromiseResult
    .then((b_res)=>{
        console.log("B reslut:",b_res)
        return taskCasy(b_res)
    })
    .then((c_res)=>{
        console.log("C result:",c_res)
    })