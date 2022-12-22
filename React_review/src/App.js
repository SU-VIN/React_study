import './App.css';
import DiaryEditor from './DiaryEditor';
function App() {
  let name = "수빈"
  return (
    <div className="App">
      <h2>hi {name}!</h2>
      <DiaryEditor/>
    </div>
  );
}

export default App;
