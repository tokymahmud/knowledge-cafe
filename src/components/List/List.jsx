import React from 'react';
import './List.css'

const List = (props) => {
    const {list} =props;
    console.log(list);
    return (
        <div>
             <h4 className='listOne'>Spent time on read : {list.length}</h4>
                <h4>Bookmarked Blogs : </h4>
        </div>
    );
};

export default List;