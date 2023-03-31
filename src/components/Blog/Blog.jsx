import React from 'react';
import "./Blog.css"

const Blog = (props) => {
    const {_id, blogCoverImage, authorImage, read_time, author_name, blogTitle, publishDate} = props.data;

    return (
        <div className='blogContainer'>
            <img className='blogContainer-img' src={blogCoverImage} />
            <div className='authorPart'>
            <div className='namePart'>
                <img className='author-img' src={authorImage}></img>
                
                <div>
                    <h3>{author_name}</h3>
                    <h5>{publishDate}</h5>
                </div>

            </div>
             
             <h6>{read_time}m read</h6>
                
            </div>
            <h2>{blogTitle}</h2>
            <h6>#beginners #programming</h6>
            <a href="">Mark as read</a>

        </div>
    );
};

export default Blog;