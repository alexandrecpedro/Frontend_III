import { useEffect, useState } from "react";
import { BlogCard } from "../../../components/EighteenthClassItem/BlogCard";

import "./style.scss";

export const BlogHome = () => {
    /** REACT HOOKS **/
    // (1) useState
    const [posts, setPosts] = useState([]);

    // (2) useEffect
    useEffect(() => {
        getPosts();
    }, []);

    /** FUNCTION **/
    function getPosts() {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
            .then((response) => response.json())
            .then((postArray) => setPosts(postArray));
    }

    return (
        <div>
            <div className='content-container'>
                <div className='cards'>
                    {
                        posts.map(
                            (posts, index) => (
                                <BlogCard
                                    key={index}
                                    data={posts}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}