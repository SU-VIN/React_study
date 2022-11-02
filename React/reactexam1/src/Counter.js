import React, {useState} from "react";

const Counter=()=>{
    //0에서 출발 == userStage(0)
    //1씩 증가하고
    //1씩 감소하는
    //count 상태

    //userState== react 의 메서드를 배열의 비구조 할당을 사용해
    //0은 count 1은 setCount로 받아옴
    //count는 현재상태 setCount는 count를 update시킴

    console.log("Counter 호출!")

    const [count, setCount] = useState(0)
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
        </div>
    )
}

export default Counter;

//!!!!! 컴포넌트는 자신이 가진 상태가 변화하면 리렌더를 한다.