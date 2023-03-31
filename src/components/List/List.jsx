import React from 'react';
import './List.css'

const List = (props) => {
    const {list} =props;
    console.log(list);
    let total =0;
    for (const time of list ){
        total = total + time.read_time;
    }
    return (
        <div>
             <h4 className='listOne'>Spent time on read : {total}</h4>
                <h4>Bookmarked Blogs : </h4>
        </div>
    );
};

export default List;