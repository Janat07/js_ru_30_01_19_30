import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import { addComment } from '../AC/index'


class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }
    static defaultProps = {
        comments: []
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
        // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments, article, addComment} = this.props
        if (!comments.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={article.id} addComment={addComment}/>
        </div>)

        //  const commentItems = comments.map(id => <li key={id}><Comment id={id}/></li>)
        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm />
        </div>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

//export default CommentList
export default connect((state, { article }) => {
    return {
        state,
        article
    }
}, {
    addComment
})(CommentList)
