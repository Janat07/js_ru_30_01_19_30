import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import Loader from './Loader'
import { loadAllComments,addComment} from '../AC'
import { getRelation } from '../utils'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen:PropTypes.func,
    }

    componentWillReceiveProps({ article: { id, commentsLoading, commentsLoaded }, isOpen, loadAllComments }) {
               if (isOpen && !this.props.isOpen && !commentsLoaded && !commentsLoading) loadAllComments(id)
          }
    render() {
        const { article, comments, addComment, isOpen, toggleOpen } = this.props
        if (!comments || !comments.length) return <div>
            <p>No comments yet</p>
            <NewCommentForm articleId={article.id} addComment={addComment}/>
        </div>

        const commentItems = article.commentsLoaded && comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
        const content = article.commentsLoading || !article.commentsLoaded ? <Loader /> : <ul>{commentItems}</ul>


        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{text}</a>
                {this.getBody()}
            </div>
        )
    }




       /* const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )*/

    getBody() {
        if (!this.state.isOpen) return null

        const {comments = [], id} = this.props.article
        if (!comments.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={id} />
        </div>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default connect((state, props) => ({
    comments: getRelation(props.article, 'comments', state)
}), { addComment, loadAllComments })(CommentList)