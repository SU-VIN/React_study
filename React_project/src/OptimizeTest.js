import React, { useState, useEffect } from "react";

// const TextView= React.memo(({text})=>{

//     useEffect(()=>{
//         console.log(`update :: text : ${text}`);
//     });

//     return <div>{text}</div>;
// });

// const CountView= React.memo(({count})=>{

//     useEffect(()=>{
//         console.log(`update :: count : ${count}`);
//     });

//     return<div>{count}</div>;
// });


const CounterA = React.memo(({count})=>{
    useEffect(()=>{
        console.log(`counter a update:: ${count}`)
    });
    return <div>{count}</div>;
});

//객체는 얕은비교.. 즉 값을 비교하는게아닌 주소비교를함
const CounterB = React.memo(({obj})=>{
    useEffect(()=>{
        console.log(`counter b update:: ${obj.count}`)
    });
    return <div>{obj.count}</div>;
});

const OptimizeTest= ()=>{

    const[count,setCount] = useState(1);
    const[obj,setObj] = useState({
        count:1,
    });

    return(
    <div style={{padding:50}}>
        <div>
            <h2>Counter A</h2>
            <CounterA count={count}/>
            <button onClick={()=>setCount(count)}>A button</button>
        </div>
        <div>
            <h2>Counter B</h2>
            <CounterB obj={obj}/>
            <button onClick={()=>setObj({
                count: obj.count
            })}>B button</button>
        </div>    
    </div>
    );
}

export default OptimizeTest