import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import Viewer from '../components/Viewer'; 


function Diary(props) {

    const {id} = useParams(); 

    const data = useContext(DiaryStateContext); 


    const [diary, setDiary] = useState(); 


    useEffect (  () => { 


        const matchDiary = data.find( (it) => String(it.id) === String(id) 
         ); 

         if (!matchDiary) {

            alert ("해당 읽기가 존재하지 않습니다. / 페이지로 이동합니다. ") ; 
            navigate("/" , {replace: true}); 
         } else {

            setDiary(matchDiary); 
         }
    }
        , [id, data]
    ); 

    const navigate = useNavigate();
    

    if ( !diary) {
        return <div> 현재 값이 로딩중 입니다. </div>
    }else {


  const { content, emotionId, date} = diary ; 

    return (
        <div>
            <Header title = { ` ${id} 글의 상세내용  `}
                leftChild= {<Button text=" < 뒤로가기 " 
                            type="positive" onClick={()=> { navigate(-1)}}  />}
                rightChild= {<Button text=" 수정 하기 " 
                            type="negative" onClick={()=> { navigate(`/edit/${id}`) }}  />}
                />

            <Viewer {...diary} />      
        </div>
    );
}
}

export default Diary;