import React, { useContext, useState, useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../App';
import { getMonthRangeByDate} from '../utils'; 

function Home(props) {


    const data = useContext(DiaryStateContext); 

    const [filteredDate, setfilteredDate] = useState([]); 
    const [pivotDate, setPivotDate] = useState( new Date()); 


    useEffect(
        () => {
           if (data.length >= 1 ) {        

            const { beginTimeStemp, endTimeStemp} = getMonthRangeByDate(pivotDate); 


            setfilteredDate (
                data.filter(
                    (it) => beginTimeStemp <= it.date && it.date <= endTimeStemp
                ) 
            ); 
           } 
        } , [data, pivotDate]
    ); 




    const headerTitle = `${pivotDate.getFullYear()} 년 ${pivotDate.getMonth() + 1 }월` 

    const onDecreaseMonth = () => 
    {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1 ) ); 
    }

    const onIncreseMonth = () => 
    {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1 ) ); 
    }

    console.log(typeof filteredDate);
    console.log(typeof filteredDate.values.toString);
    const json = JSON.stringify(filteredDate);
    console.log(json);
    

    return (
        <div>
            <Header 
                title = {headerTitle} 
                leftChild={<Button text={" < "} type="positive" 
                    onClick={ onDecreaseMonth } />}
                rightChild={<Button text={" > "} type="negative" 
                    onClick={ onIncreseMonth }/>}
            />

            <DiaryList data={filteredDate} />
{/* 
            <DiaryList data={data} />
 */}
        </div>
    );
}

export default Home;