import React, { useState, useEffect } from 'react';
import './Editor.css'; 
import {emotionList , getFormattedDate} from '../utils'; 
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useNavigate } from 'react-router-dom';


function Editor({initData, onSubmit}) {


    const [state, setState] = useState({
        date : getFormattedDate(new Date()), 
        emotionId : 3, 
        content : "", 
    }); 


    useEffect(
        () => {
            if (initData){
                setState({...initData, date:getFormattedDate(new Date (parseInt(initData.date)))});
            }

        }, [initData]
    );



    const handleChangeDate = (e) => {
        setState (
            {...state, date:e.target.value}
        ); 
    }



    const navigate = useNavigate(); 

    const handleChangeEmotion = (e) => {
       setState({
            ...state, emotionId:e
       }); 
    }

    const handleChangeContent = (e) => {
        setState({
            ...state, content: e.target.value
        }); 
    }


    const handleSubmit = () => {
        onSubmit(state); 
    }



    return (
        <div className="Editor">
            <h4> 오늘의 날짜 </h4>
            <div className="input_wrapper">
                <input type="date" value={state.date}
                    onChange = {handleChangeDate}
                /> 
            </div>

           
            <div className="editor_section">
                <h4> 오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                   {
                   emotionList.map( (it) => (
                        <EmotionItem key={it.id} {...it} 
                            onClick={handleChangeEmotion}  
                            isSelected={state.emotionId === it.id}
                            />
                   ) )} 
                </div>
            </div>

           
            <div className="editor_section">
                <h4> 오늘의 일기 </h4>
                <div className="input_wrapper"> 
                    <textarea 
                        placeholder='오늘은 어땟나요'
                        value = {state.content}
                        onChange = {handleChangeContent}
                        /> 
                </div>

            </div>

          
            <div className="editor_section bottom_section">
                <Button text= {"취소하기"} type = {"negative"} onClick = { ()=> {navigate('/', {replace:true})}}   />
                <Button text={"작성완료"} type = {"positive"} onClick= {handleSubmit} />
            </div>
        </div>
    );
}

export default Editor;