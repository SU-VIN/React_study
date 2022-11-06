import React,{useEffect, useState} from "react"

const UmmountTest = ()=>{

    useEffect(()=>{
        console.log("Mount")

        return()=>{
            //Unmount 시점에 실행되게 됨
            console.log("Unmount")
        }
    },[])

    return <div>Ummount Testing component</div>
}


const Lifecycle = ()=>{

    // const[count,setCount]= useState(0)
    // const[text,setText]=useState("")

    // useEffect(()=>{
    //     console.log("Mount")

    // },[]);

    // //defendency array 전달안하면 update!
    // useEffect(()=>{
    //     console.log("Update!")
    // })

    // //defendency array의 값이 변화하면 callback이 실행
    // useEffect(()=>{
    //     console.log(`count is update : ${count}`)
    //     if(count>5){
    //         alert("count가 5를 넘었습니다 따라서 1로 초기화 합니다.")
    //         setCount(1)
    //     }
    // },[count])

    // useEffect(()=>{
    //     console.log(`text is update : ${text}`)
    // },[text])

    const [isVisible,setIsVisible]= useState(false);
    const toggle = ()=>setIsVisible(!isVisible);

    return(
        <div style={{padding:20}}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UmmountTest/>}
        </div>
    )

}

export default Lifecycle