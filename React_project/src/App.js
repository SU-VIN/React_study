import './App.css'
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


const dummyList = [
  {
    id:1,
    author:"임수빈",
    content:"hello",
    emotion:4,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author:"홍길동",
    content:"hello1212",
    emotion:1,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author:"김나나",
    content:"hello ㅎㅎ",
    emotion:2,
    created_date: new Date().getTime()
  }
]

//부모컴포넌트에서 자식컴포넌트에게 어떤값을 이름을붙여서 보내는게 prop
//diaryList === prop임
function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
