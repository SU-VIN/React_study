import React,{useEffect,useState} from "react"

const UnmountTest=()=>{
    useEffect(()=>{
        console.log("mount");

        return()=>{
            console.log("unmount")
        }
    },[]);
    return(
        <div>
            Unmount Testing Component
        </div>      
    )
}

const Lifecycle=()=>{

    const[isVisivle,setIsVisivle]=useState(false);
    const toggle=()=>{
        setIsVisivle(!isVisivle);
    }

    // const [count,setCount]= useState(0);
    // const [text,setText] = useState("");

    // useEffect(()=>{
    //     console.log("Mount!");
    // },[]);

    // useEffect(()=>{
    //     console.log("update!");
    // });

    // // useEffect(()=>{
    // //     console.log(`${count} 업데이트`)
    // // },[count]);

    return(
        <div style={{padding:20}}>
        <button onClick={toggle}> ON/OFF </button>
        {isVisivle&&<UnmountTest/>}
            {/* <div>
            {count}
            <button onClick={()=>{setCount(count+1);}}>+</button>
            </div>
            <div>
                <input value={text} onChange={(e)=>{
                    setText(e.target.value);
                }} ></input>
            </div> */}
        </div>
    )
}
export default Lifecycle