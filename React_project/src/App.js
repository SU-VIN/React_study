import React,{ useEffect, useMemo, useRef,useState } from 'react';
import './App.css'
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


// const dummyList = [
//   {
//     id:1 ,
//     author:"임수빈",
//     content:"hello",
//     emotion:4,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:"홍길동",
//     content:"hello1212",
//     emotion:1,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:"김나나",
//     content:"hello ㅎㅎ",
//     emotion:2,
//     created_date: new Date().getTime()
//   }
// ]

//부모컴포넌트에서 자식컴포넌트에게 어떤값을 이름을붙여서 보내는게 prop
//diaryList === prop임
function App() {

  const [data,setData] = useState([])

  const dataId = useRef(0)

  //promise를 반환하는 비동기 함수로
  const getData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res)=>res.json());
    
    const initData = res.slice(0,20).map((it)=>{
      return{
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random()*5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    })

    setData(initData);

  }

  useEffect(()=>{
    getData();
  },[]);

  const onCreate = (author,content,emotion)=>{
    const created_date = new Date().getTime();
    const newItem={
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current+=1;
    setData([newItem,...data])
  }

  const onRemove=(targetId)=>{
    const newDiaryList = data.filter((it)=>it.id !== targetId);
    setData(newDiaryList);
  }

  const onEdit = (targetid,newContent)=>{
    setData(
      data.map((it)=>it.id===targetid?{...it,content:newContent}:it)
    )

  }
  //리턴을가지고 있는 함수 useMemo 사용가능
  //useMemo는 첫밴째 인자로 콜백함수를 받아서 이 콜백함수가 리턴하는 값
  //두번째 인자는 빈배열, 두번째 인자가 변화할때만 콜백함수 실행
  //즉 데이터가 추가될때만 일기분석을 한다는 내용!
  //이렇게 getDiaryAnalysis는 리턴받은 값을 가지므로 더이상 함수가 아님!! 변수처럼 대해죠
  const getDiaryAnalysis= useMemo(
    ()=>{
    const goodCount = data.filter((it)=>it.emotion>=3).length;
    const badCount = data.length-goodCount;
    const goodRatio = (goodCount/data.length)*100;
    return{goodCount,badCount,goodRatio};
  },[data.length]
  );

  const{goodCount,badCount,goodRatio} = getDiaryAnalysis; //비구조화 객체 할당

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
