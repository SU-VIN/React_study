import React,{useState} from "react";
import OddEvenResult from "./OddEvenResult";
const Counter = ( {prop} )=>{

    //setCount 는 함수임!
    const[count, setCount] = useState(prop);
    
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
        <OddEvenResult count={count}/>
        </div>
    );

};
Counter.defalutProps={
    prop:0,
}
export default Counter;