import { useRef, useState } from "react";

const DiaryItem=({
    author,
    content,
    emotion,
    created_date,
    id,
    onDelete,
    onEdit,
})=>{

    const localContentInput = useRef(); 

    const [isEdit,setIsEdit]=useState(false);
    const toggleIsEdit=()=>setIsEdit(!isEdit);


    const [localContent,setLocalContent] = useState(content);

    const handelDelete =()=>{
        if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)){
            onDelete(id);
        }
    }
    const handleQuitEdit = ()=>{
        setIsEdit(false);
        setLocalContent(content);
    }
    
    const handleEdit = ()=>{
        if(localContent.length<5){
            localContentInput.current.focus();
            return;
        }

        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
            onEdit(id,localContent);
            toggleIsEdit();
        }
        
    }

    return( 
        <div className="DiaryItem">
            <div className="info">
                <span>작성자 :{author} | 감정점수 :{emotion}</span>
                <br/>
                <span className="date">{new Date(created_date).toLocaleDateString()}</span>
            </div>
            <div className="content">
                {isEdit?<>
                    <textarea ref={localContentInput}value={localContent} onChange={(e)=>setLocalContent(e.target.value)}/>
                </>:<>{content}</>}
            </div>
            <div>
                {isEdit?<><button onClick={handleQuitEdit}>수정 취소</button>
                        <button onClick={handleEdit}>수정 완료</button></>:
                        <><button onClick={handelDelete}>삭제하기</button>
                        <button onClick={toggleIsEdit}>수정하기</button></>}

            </div>


        </div>
    )
}

export default DiaryItem;