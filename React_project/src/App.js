import React,{ useEffect, useRef,useState } from 'react';
import './App.css'
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

//https://jsonplaceholder.typicode.com/comments

// const dummyList = [
//   {
//     id:1,
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
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it)=>it.id !== targetId);
    setData(newDiaryList);
  }

  const onEdit = (targetid,newContent)=>{
    setData(
      data.map((it)=>it.id===targetid?{...it,content:newContent}:it)
    )

  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
