import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import "./Body.css"

const Body = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
         fetch('data.json')
         .then(res=> res.json() )
         .then(data=> setData(data))
    }, [])
    return (

        <div className='body-container'>
            <div className="blog-container">
                {
                    data.map(data => <Blog key={data._id}></Blog>)
                }

            </div>
            <div className="list-container">
                <h4>Spent time on read : </h4>
                <h4>Bookmarked Blogs : </h4>
            </div>
            
        </div>
    );
};

export default Body;