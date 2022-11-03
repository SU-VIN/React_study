import{useState} from "react"

const DiaryEditor = ()=>{
    //1.작성자
    //2.일기본문
    //3.감정점수
    //사용자의 입력을 리액트에서 핸들링하기위해선 state를 사용할 수 있음 

    const[state,setState] = useState({
        author:"",
        content:"",
        emotion:1
    })

    //동일한 행동을 위에것으로 통합
    // const[author, setAuthor] = useState(""); 
    // const[content,setContent] = useState("내용을 입력하세요")

    const handleChangeState = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        console.log(state);
        alert("저장 성공")
    }

    return(
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input name="author" value={state.author} onChange={handleChangeState}>
                </input>
            </div>

            <div>
                <textarea name="content" value={state.content} onChange={handleChangeState}
                />
            </div>

            <div>
                <span>오늘의 감정점수 : </span>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    )

}

export default DiaryEditor;