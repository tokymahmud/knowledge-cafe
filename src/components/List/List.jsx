import React from 'react';
import './List.css'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

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
//         if(bookMname === name.blogTitle){
//             const MySwal = withReactContent(Swal)

// MySwal.fire({
//   title: <p>Already available</p>,
//   didOpen: () => {
//     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
//     MySwal.showLoading()
//   },
// }).then(() => {
//   return MySwal.fire(<p></p>)
// })

//         }
//         else{
           
//         }

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