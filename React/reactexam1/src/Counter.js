import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";

const Counter=(props)=>{


    //0에서 출발 == userStage(0)
    //1씩 증가하고
    //1씩 감소하는
    //count 상태

    //userState== react 의 메서드를 배열의 비구조 할당을 사용해
    //0은 count 1은 setCount로 받아옴
    //count는 현재상태 setCount는 count를 update시킴


    const [count, setCount] = useState(props.initialValue)
    const onIncrease=()=>{
        setCount(count+1)
    }
    const onDecrease=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count = {count}/>
        </div>
    )
}

Counter.defaultProps={
    initialValue:0
}

export default Counter;

//!!!!! 컴포넌트는 자신이 가진 상태가 변화하면 리렌더를 한다.