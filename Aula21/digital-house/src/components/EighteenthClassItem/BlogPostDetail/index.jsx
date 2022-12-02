import { useEffect, useState } from "react";
import { BlogComment } from "../BlogComment";

import "./style.scss";

export const BlogPostDetail = (props) => {
    const { id, title, body } = props.data;

    /** REACT HOOKS **/
    // (1) useState
    const [comments, setComments] = useState([]);

    console.log(comments);

    // (2) useEffect
    useEffect(() => {
        getComments(id);
    }, []);
    
    /** FUNCTION **/
    function getComments(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((data) => setComments(data));
    }

    return (
        <div className='post-detail-container'>
            <div className='post-detail-content'>
                <img src="https://picsum.photos/800/600" alt="" />

                <div className='post-text'>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>

                <div className='commets'>
                    <h3>{comments.length} Comments</h3>
                    {
                        comments.map(
                            (data, index) => (
                                <BlogComment
                                    key={index}
                                    data={data}
                                    className='post-comments-container'
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}