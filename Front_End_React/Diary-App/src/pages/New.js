import React, { useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import Editor from '../components/Editor';

function New(props) {

    const navigate = useNavigate(); 


    const {onCreate} = useContext(DiaryDispatchContext); 

    const onSubmit = (data) => {
        console.log("글쓰기 호출됨 !!!!")

        const {date, content, emotionId } = data; 

        
        onCreate(date, content,emotionId); 
        navigate('/', {replace: true}); 

    }

    return (
        <div>
            <Header title = "새 읽기 쓰기" 
                leftChild= {<Button text=" < 뒤로가기 " 
                            type="positive" onClick={()=>{navigate(-1)}}  />}
                />
            <Editor onSubmit = {onSubmit} />
            
        </div>
    );
}

export default New;