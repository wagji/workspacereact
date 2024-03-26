import React, { useState , useEffect} from 'react';
import './DiaryList.css'; 
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';

function DiaryList({data}) {

    const navigate = useNavigate();

  
    const sortOptionList = [
        { value : "latest", name : "최신 순"}, 
        { value : "oldest", name : "오래된 순"},
    ] ;


    const [sortType, setSortType] = useState("latest"); 

 
    const [sortData, setSortData] = useState([]); 


    useEffect(
        () => {
       
            const compare =  (a, b) => {
                if (sortType === "latest" ) {  
                    return  Number(b.date) - Number(a.date) ; 

                }else {     
                    return Number(a.date) - Number(b.date); 
                }; 
            }
     

            const copyList = JSON.parse(JSON.stringify(data)); 


            copyList.sort(compare); 


            setSortData(copyList); 

        } , [ data, sortType ]
    ); 

    const onChangeSortType = (e) => {
        console.log (e.target.value); 
        setSortType(e.target.value); 
    }

    return (
        <div className="DiaryList">

            <div className="menu_wrapper">
                <div className="left_col">
                    <select value={sortType} onChange={onChangeSortType}> 
                       {
                        sortOptionList.map( (it , idx) => ( 
                                <option key={idx} value = {it.value}> {it.name} </option>
                        ) )
                       }
                    </select>
                </div>
                <div className="right_col">
                    <Button text={"새 글쓰기"} type= {"positive"} onClick = {() => {navigate('/new')}}  />
                </div>
            </div>


            <div className="list_wrapper">
                {
                    sortData.map( (it) => (
                            <DiaryItem key={it.id} {...it} />
                    )    ) 
                }
                
            </div>  

        </div>
    );
}

export default DiaryList;