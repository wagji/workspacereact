import React from 'react';
import {emotionList} from '../utils'; 
import  './Viewer.css'; 

function Viewer({content, emotionId,name}) {

const emotionItem = emotionList.find(
    (it) => String (emotionId) === String (it.id)
); 


    return (
        <div className="Viewer">

            <section>
                <h4> 오늘의 감정</h4>
                <div className = {["emotion_img_wrapper", 
                        `emotion_img_wrapper_${emotionId}`].join(" ")}> 
                    <img alt={emotionItem.name} src={emotionItem.img} /> 
                    <div className="emotion_descript"> {emotionItem.name}</div>
                </div>
            </section>

            <section>
                <h4> 오늘의 읽기 </h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>
            
        </div>
    );
}

export default Viewer;