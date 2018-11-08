import React from 'react'

const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="media mb-4 ">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
            <div className="media-body">
                <h5 className="mt-0">{comment.name}</h5>
                <p>{comment.body}</p>
            </div>
        </div>
    )
}

export default Comment;
