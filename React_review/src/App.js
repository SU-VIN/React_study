import './App.css';
import Counter from './Counter';
function App() {

  const CounterProps={
    a:1,
    b:2,
    c:3,
    d:4,
    prop:5
  }

  return (
    <div className="App">
      <Counter {...CounterProps}/>
    </div>
  );
}

export default App;
