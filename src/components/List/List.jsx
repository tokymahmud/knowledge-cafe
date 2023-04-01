import React from 'react';
import './List.css'

const List = (props) => {
    const {list, listB} =props;
    let total =0;
    for (const time of list ){
        total = total + time.read_time;
    }
    let totalBookmark =0;
    let bookMname ='';
    for (const name of listB ){
        totalBookmark = totalBookmark + 1;
        bookMname =bookMname +name.blogTitle
    }
    return (
        <div>
             <h4 className='listOne'>Spent time on read : {total} min</h4>
                <h4 className='listOne'>Bookmarked Blogs :{totalBookmark}</h4>
                <h3 className='BookmarkPage'>{bookMname}</h3>
        </div>
    );
};

export default List;