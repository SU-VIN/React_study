// API 호출하기
/*
API(Application Programming Interface) -응용 프로그램 프로그래밍 인터페이스

응용프로그램에서 사용할 수 있도록 운영 체제나 프로그래밍 언어가 제공하는 기능을 
제어할 수 있게 만든 인테페이스를 뜻함. 주로 파일제어, 창 제어, 화상 처리, 문자 제어
등을 위한 인터페이스를 제공한다.

    1.주문        2.찾기
   -------->     --------> 
손님         웨이터          냉장고
   <--------     <--------
   4.음식서빙       3.가져오기

                데이터 요청       데이터 검색
                1.request      2.Query
               -------->     --------> 
Browser(client)         Server          DataBase
               <--------     <--------
                4.Response     3.Query Result
                요청 데이터 전달    데이터 찾기



우리는 1, 4번(API호출) 을 배움
즉 데이터를 받기위해 그 데이터를 가지고있는 사람한테 말을건다라고 생각하면 쉬움
*/

//json 데이터 뽑기
async function getData(){
    let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse)
}   



//fetch == js 내장함수 api호출을 도와줌
// let response = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{
//         console.log(res)
//     })

getData()
