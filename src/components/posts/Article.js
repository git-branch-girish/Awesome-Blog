import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import Comment from '../posts/Comment';
import { fetchPostById } from '../../actions/postActions';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noComment: 3
        }
    }

    renderArticles = (article, comments) => {
        return (
            <React.Fragment>
                <Link to="/" className="btn btn-dark btn-sm mb-4" ><i className="fas fa-arrow-left"></i> Back</Link>
                <div className="card">
                    <h4 className="card-header">
                        {article.title}
                    </h4>
                    <div className="card-body">
                        <p className="card-text">{article.body}</p>
                    </div>
                </div>

                <div className="mt-4 mb-4">
                    <h4>Comment</h4>
                </div>
                {
                    comments.slice(0, this.state.noComment).map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                }
                {
                    (comments.length > 0 && this.state.noComment <= comments.length) &&
                    < div className="text-center mb-4">
                        <button onClick={this.loadMoreCommentsHandler} type="button" class="btn btn-primary">Load More...</button>
                    </div>
                }


            </React.Fragment>
        )

    }
    loadMoreCommentsHandler = () => {
        this.setState({
            noComment: this.state.noComment + 10
        })
    }

    componentDidMount() {
        if (this.props.fetchPostById) {
            this.props.fetchPostById(this.props.match.params.id);
        }
    }

    render() {
        const { article, comments } = this.props;
        if (article === undefined ||
            comments === undefined ||
            comments.length === 0 ||
            Object.keys(article).length === 0) {
            return <Spinner />;
        } else {
            return (this.renderArticles(article, comments))
        }
    }
}

const mapStateToProps = state => ({
    article: state.posts.article,
    comments: state.posts.comments
})


export default connect(mapStateToProps, { fetchPostById })(Article);
