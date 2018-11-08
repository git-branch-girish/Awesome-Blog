import { FETCH_POSTS, FETCH_POST_BY_ID, FETCH_COMMENTS_BY_ID } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        )
        .catch(err => console.log(err));
};

export const fetchPostById = (id) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(article =>
            dispatch({
                type: FETCH_POST_BY_ID,
                payload: article
            })
        )
        .then(article =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(res => res.json())
                .then(comment =>
                    dispatch({
                        type: FETCH_COMMENTS_BY_ID,
                        payload: comment
                    })
                )
        )
        .catch(err => console.log(err));
};