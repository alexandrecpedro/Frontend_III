import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogPostDetail } from "../../../components/EighteenthClassItem/BlogPostDetail";

export const PostDetail = () => {
    /** REACT HOOKS **/
    // (1) useState
    const [post, setPost] = useState([]);

    // (2) useParams
    const { id } = useParams();

    // (3) useEffect
    useEffect(() => {
        getPost(id);
    }, []);

    /** FUNCTION **/
    function getPost(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((postData) => setPost([postData]));
    }

    return (
        <div className="post-container">
            {
                post.map(
                    (data, index) => (
                        <BlogPostDetail
                            key={index}
                            data={data}
                        />
                    )
                )
            }
        </div>
    );
}