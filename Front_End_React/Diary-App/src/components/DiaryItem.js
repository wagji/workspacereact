import React from 'react';
import './DiaryItem.css';
import {getEmotionImgById} from '../utils'; 
import Button from './Button'; 
import { useNavigate } from 'react-router-dom';

function DiaryItem({id , emotionId, content, date}) {

    const navigate = useNavigate(); 


    const onDetail = () => {
        navigate(`/diary/${id}`); 
    }

 
    const goEdit = () => {
        navigate(`/edit/${id}`); 
    }


    return (
        <div className="DiaryItem">
            <div onClick={onDetail} className={  ['img_section' , `img_section_${emotionId}`].join(" ")  }>
                <img src = {getEmotionImgById(emotionId)}  alt= {`emotion${emotionId}`} />
            </div>
            <div onClick={onDetail} className="info_section">
                <div className="date_wrapper">
                    {new Date(parseInt(date)).toLocaleDateString()}
                </div>
                <div className="content_wrapper">
                    {content.slice(0,25)}
                </div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"} type={"default"} 
                    onClick = { goEdit } /> 
            </div>

        </div>
    );
}

export default DiaryItem;