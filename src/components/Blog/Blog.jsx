import React from 'react';
import "./Blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Blog = (props) => {
    const {_id, blogCoverImage, authorImage, read_time, author_name, blogTitle, publishDate} = props.data;
    const handleAddToList =props.handleAddToList;
    const handleAddToB =props.handleAddToB;
   

    return (
        <div className='blogContainer'>
            <img className='blogContainer-img' src={blogCoverImage} />
            <div className='authorPart'>
            <div className='namePart'>
                <img className='author-img' src={authorImage}></img>
                
                <div className='nameStyle'>
                    <h3>{author_name}</h3>
                    <h5>{publishDate} (3d ago)</h5>
                </div>

            </div>
             
             <h6>{read_time}min read <button onClick={()=> handleAddToB(props.data)}>
             <FontAwesomeIcon icon={faBookmark} />
                
             </button  >
             
             </h6>
                
            </div>
            <h2 className='blog-title'>{blogTitle}</h2>
            <h6>#beginners #programming</h6>
            <button onClick={()=> handleAddToList(props.data)  }>            Mark as read
 </button>

        </div>
    );
};

export default Blog;