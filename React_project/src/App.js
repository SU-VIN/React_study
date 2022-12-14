import React,{ useCallback, useEffect, useMemo, useReducer, useRef} from 'react';
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
//1.상태변화 직전의 state 2.어떤 상태변화를 일으켜야 하는지에 대해 정보를 담음
const reducer = (state,action)=>{
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    case 'CREATE':{
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data, //author, content ...
        created_date,
      };
      return [newItem,...state];
    }
    case 'REMOVE':{
      return state.filter((it)=>it.id!==action.targetId);
    }
    case 'EDIT':{
      return state.map((it)=>it.id==action.targetId?
      {...it,content: action.newContent}:it);
    }
    default: return state;
  }
}
//export default는 파일에 하나밖에 못씀 하지만 그냥 export는 여러개가능
export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

//부모컴포넌트에서 자식컴포넌트에게 어떤값을 이름을붙여서 보내는게 prop
//diaryList === prop임
function App() {

  // const [data,setData] = useState([])
  
  //인자1,reducer == 상태변화 확인 인자2,data state의 초기값
  const [data, dispatch]=useReducer(reducer,[]);
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
    dispatch({type:'INIT',data: initData});
    // setData(initData);

  }

  useEffect(()=>{
    getData();
  },[]);

  const onCreate = useCallback((author,content,emotion)=>{

    dispatch({type:'CREATE',data:{author,content,emotion,id:dataId.current}})

    // const created_date = new Date().getTime();
    // const newItem={
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id: dataId.current,
    // }
    dataId.current+=1;

    //setData 에 함수를 전달 = 함수형 업데이트
    // setData((data)=>[newItem,...data])
  },[]);

  const onRemove=useCallback((targetId)=>{

    dispatch({type:'REMOVE',targetId});
  },[]);

  const onEdit = useCallback((targetid,newContent)=>{

    dispatch({type:"EDIT",targetid,newContent})
  },[]);

  const memoizedDispatches = useMemo(()=>{
    return{onCreate,onRemove,onEdit}
  },[])

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
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList onRemove={onRemove} onEdit={onEdit}/>
    </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
