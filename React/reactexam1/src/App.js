import './App.css';

function App() {
  let name = "suvin"
  return (
    <div className="App">
      <header className="App-header">
        <h2>안녕 리액트{name}</h2>
      </header>
    </div>
  );
}


//module.exports

//react가 주로 사용하는 es module system
//module를 내보내면 import 이름 from 경로로 사용함
export default App;
