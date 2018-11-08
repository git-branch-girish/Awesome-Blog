import React from 'react'
import { Link } from 'react-router-dom';
import "../../App.css";

const Post = (props) => {
    const { post } = props;
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm mHeight">
                <div className="card-body">
                    <Link to={`/post/${post.id}`}>
                        <h4>{post.title}</h4>
                    </Link>
                    <p className="card-text">{post.body.substring(0, 100)}</p>
                    <Link to={`/post/${post.id}`} className="btn btn-dark">
                        Read More <i class="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Post;
