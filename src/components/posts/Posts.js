import React, { Component } from 'react';

import Spinner from '../layout/Spinner';
import Post from '../posts/Post';

import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noPosts: 10
        }
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    loadMorePostsHandler = () => {
        this.setState({
            noPosts: this.state.noPosts + 10
        })
    }

    render() {
        let postsItems = null;
        const { posts } = this.props;

        if (posts === undefined || posts.length === 0) {
            postsItems = <Spinner />
        } else {
            postsItems = posts.slice(0, this.state.noPosts).map(post => (
                <Post key={post.id} post={post} />
            ));
        }
        return (
            <React.Fragment>
                <h1>Popular Posts:</h1>
                <div className="row" >
                    {postsItems}
                </div>
                {
                    (posts.length > 0 && this.state.noPosts <= 100) &&
                    < div className="text-center mb-4">
                        <button onClick={this.loadMorePostsHandler} type="button" class="btn btn-primary">Load More...</button>
                    </div>
                }

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
