import './App.css';
import React, { useReducer, useEffect, useRef, useState } from 'react';


import {Routes, Route, Link, useNavigate, useParams} from 'react-router-dom';

import Header from './include/Header';
import Footer from './include/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import ButtonTest from './test/ButtonTest';
import ImgTest from './test/ImgTest';
import DiaryService from './Services/DiaryService';


const mockData = [
  {
    id : 0,
    date: new Date().getTime() - 1,
    content:"mock1", 
    emotionId : 1 
  },
  {
    id : 1,
    date: new Date().getTime() - 2,
    content:"mock2", 
    emotionId : 2 
  },
  {
    id : 2,
    date: new Date().getTime() - 3,
    content:"mock3", 
    emotionId : 3 
  },

]; 

export const DiaryStateContext = React.createContext(); 
export const DiaryDispatchContext = React.createContext();


function reducer ( state, action) {
  switch (action.type) {
    case "INIT": 
      return action.data; 
    case "CREATE":
      return [action.data, ...state]; 
    case "DELETE":

      return state.filter( (it) => String( it.id ) !== String (action.targetId )
      );
    case "UPDATE": 
      return state.map( (it)=> String(it.id) === String(action.data.id) ? 
                      {...action.data}: it ) ; 
  }
}



function App() {

  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [emotionId, setEmotionId] = useState('');
  const [diary, setDiary] = useState([]);
  const navigate = useNavigate();


const [data , setData] = useState([]); 
const idRef = useRef(3); 



  useEffect( () => {
    getAllDiary();
  }
    ,[]
  );

  const getAllDiary = () =>
{
  DiaryService.getAllDiary().then((response) => 
  {
    setData(response.data); 
    console.log(response.data);
  }).catch(error => {console.log(error)})
}

  const onCreate = (date, content, emotionId) => {

    create(date, content, emotionId);
  }

  const create = (date, content, emotionId) =>
  {
    const diary = {date, content, emotionId}
    DiaryService.createDiary(diary).then((response) => {
      console.log(response.data)
    }).catch(error => {console.log(error)})
  }


  const get = (id) =>
  {
    DiaryService.getDiaryById(id).then((response) =>
    {
      setDate(response.data.date)
      setContent(response.data.content)
      setEmotionId(response.data.emotionId)
    }).catch(error => {console.log(error)})
  }


  const onUpdate = (id, date, emotionId, content) => {
    console.log (`App 업데이트 날짜 : ${date}`)
    console.log (`포멧 완료된 날짜 : ${new Date(date).getTime()}`)

    update(id, date, emotionId, content);
    console.log(id)
    console.log(date)
    console.log(emotionId)
    console.log(content)
  }


  const update = (id, date, emotionId, content) =>
  {
    const diary = {date, content, emotionId}

    DiaryService.updateDiary(id, diary).then((response) => {
      console.log(response.data)
    }).catch(error => {console.log(error)})
  }


  const onDelete = (targetId) => 
  {
    deleteD(targetId);
    console.log(targetId);
  }


  const deleteD = (id) =>
  {
   
    DiaryService.deleteDiary(id).then((response)=>
    {
      DiaryService.getAllDiary();
    }).catch(error => {console.log(error)})
  }

  return (
      <DiaryStateContext.Provider value= {data} > 
      <DiaryDispatchContext.Provider value= {{onCreate, onUpdate, onDelete}}>

    <div className="App">
        <h1> 다이어리 APP </h1>

      <Header />
      <hr />
      <p /><p /><p /><p /><p /><p />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element= {<New />}></Route>
        <Route path="/diary/:id" element= {<Diary />}> </Route>
        <Route path="/edit/:id" element= {<Edit />}> </Route>

        <Route path="/btntest" element =  {<ButtonTest />}> </Route>
        <Route path="/imgtest" elememt = {<ImgTest />}> </Route>
      </Routes>

      <p /><p /><p /><p /><p /><p />
      <hr />
      <Footer /> 
    </div>

    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

  );
}

export default App;
