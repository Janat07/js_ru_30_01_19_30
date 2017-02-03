/**
 * Created by Tatjana Jankova on 03.02.2017.
 */
import React from 'react'
import {Component} from 'react'
import Comment from './Comment'


class CommentList extends Component {
    state = {
        isShow: false
    }

    render() {
        const {isShow} = this.state
        const {comments} =this.props
        if (!comments ) return <h4>No comments</h4>

        const commentItems = comments.map((comment =>
            <ol key={comment.id}>
                <Comment comment={comment}/>
            </ol>))

        const body = isShow ? <ul>{commentItems}</ul> : null
        const btnText = isShow ? 'Hide comments' : 'Show comments'
        return (
            <div>
                <button onClick={this.toggleOpen}>{btnText}</button>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
export default CommentList

