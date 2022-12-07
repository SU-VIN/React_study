import { useRef,useState } from "react";

const DiaryItem = ({
    onEdit,
    onRemove,
    author, 
    content, 
    created_date, 
    emotion, 
    id})=>{
    //true면 수정중 
    const [isEdit,setIsEdit]=useState(false);
    const toggleIsEdit = ()=>setIsEdit(!isEdit);

    const [localContent,setLocalContent]=useState(content);

    const localContentInput =useRef()

    const handleRemove = ()=>{
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id)
        }
    }
    //수정 상태에서 나간다
    const handleQuitEdit = ()=>{
        setIsEdit(false);
        setLocalContent(content)

    }

    const handleEdit = ()=>{
        //5글자 이상
        if(localContent.length>5){
            if(window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)){
                onEdit(id,localContent)
                toggleIsEdit();
            }

        }else{
            localContentInput.current.focus();

        }

    }

    return(
        <div className="DiaryItem">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion} </span>
                <span className="date">
                <br/>
                  {new Date(created_date).toLocaleString()}  
                </span>
            </div>
            <div className="content">
                {isEdit?<>
                    <textarea ref={localContentInput} value={localContent} onChange={(e)=>setLocalContent(e.target.value)}></textarea>
                </>:<>{content}</>}
            </div>

            {isEdit? <>
                <button onClick={handleQuitEdit}>수정 취소</button>
                <button onClick={handleEdit}>수정 완료</button>
            </>:<>
                <button onClick={handleRemove}>삭제하기</button>
                <button onClick={toggleIsEdit}>수정하기</button>
            </>}    


        </div>
    )

}

export default DiaryItem