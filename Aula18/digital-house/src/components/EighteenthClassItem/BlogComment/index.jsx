import "./style.scss";

export const BlogComment = (props) => {
    const { name, email, body } = props.data;
    
    return (
        <div className="comments-container">
            <div className='comments-user-info'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                <h3>{email}</h3>
            </div>
            
            <h5> {name}</h5>
            <p>{body}</p>
            <button>Reply</button>
        </div>
    );
}