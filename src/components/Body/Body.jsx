import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import List from '../List/List';
import "./Body.css"

const Body = () => {
    const [data, setData] = useState([]);
    const [list, setList] =useState([]);
    const [listB, setListB] =useState([]);

    useEffect(()=>{
         fetch('data.json')
         .then(res=> res.json() )
         .then(data=> setData(data))
    }, [])

    const handleAddToList = (data) =>{
        const newList = [...list, data];
        setList(newList);

    }
    const handleAddToB =(data)=>{
        const newListB = [...listB, data];
        setListB(newListB);
    }
    



    return (

        <div className='body-container'>
            <div className="blog-container">
                {
                    data.map(data => <Blog key={data._id}
                    data = {data}
                    handleAddToList ={handleAddToList}
                    handleAddToB ={handleAddToB}
                    ></Blog>)
                }

            </div>
            <div className="list-container">
               <List list={list}
               listB ={listB}
               ></List>
               
            </div>
            
        </div>
    );
};

export default Body;