import React,{useState} from "react";
const Counter = ()=>{
    //setCount 는 함수임!
    const[count, setCount] = useState(0);
    
    //증가함수
    const onIncrease = ()=>{
        setCount(count+1);
    }
    //감소함수 
    const onDecrease= ()=>{
        setCount(count-1);
    }
    return(
        <div>
        <h2>{count}</h2>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        </div>
    )
}
export default Counter;