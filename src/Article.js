import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false
    }
    /*
     constructor(props) {
     super(props)
     this.state = {
     isOpen: props.defaultOpen
     }
     }
     */

    render() {
        const {article} = this.props
        const {isOpen} = this.state

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
                <CommentList comments={article.comments} isShow={false}/>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>
                {this.props.article.text}
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
