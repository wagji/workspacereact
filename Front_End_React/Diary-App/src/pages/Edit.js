import React, { useEffect, useState }  from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import {DiaryDispatchContext, DiaryStateContext} from '../App'; 
import Editor from '../components/Editor';



function Edit(props) {

    const params = useParams();
    const {id} = useParams();

    const navigate = useNavigate(); 
    

    const data = useContext(DiaryStateContext); 


    const [diary, setDiary] = useState(); 

    useEffect(
        ()=>{

            const matchDiary = data.find( (it) => String (it.id) === String(id)  ); 
            if (matchDiary) { 
                setDiary(matchDiary); 
            }
            else { 
                window.alert('해당 일기가 존재하지 않습니다. ');  
                navigate('/' , {replace:true}); 
            }
        }, [id, data]
    );



    const {onUpdate, onDelete} = useContext (DiaryDispatchContext); 

    const goBack = () => {
        navigate(-1);
    }


    const onClickDelete = () => {
      if (
         window.confirm(`정말로 일기를 삭제 하시겠습니까? 일기 번호 : ${params.id}` )
         ){
   
            onDelete(id); 

            navigate('/', {replace:true})
         }
    }

    const onSubmit = (data) => {

        if (
             window.confirm (`일기를 정말로 수정 할까요? :  ${data.date}` )
        ){

            const {date, emotionId, content} = data ;  

            onUpdate( id, date, emotionId, content); 
 
            navigate('/', {replace:true}); 

        }
        
    }

    return (
        <div>
            <Header title = "글 수정 하기" 
                leftChild= {<Button text=" < 뒤로가기 " 
                            type="positive" onClick={goBack}  />}
                rightChild= {<Button text=" 삭제 하기 " 
                            type="negative" onClick={onClickDelete}  />}
                />
            <Editor initData= {diary} onSubmit={onSubmit} />
            
        </div>
    );
}

export default Edit;