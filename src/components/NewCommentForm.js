import React, {Component, PropTypes} from 'react'


class NewCommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.function,
        articleId: PropTypes.string
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        const {addComment, articleId} = this.props
        ev.preventDefault()
        addComment(this.state, articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        const {user, text}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange={this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange={this.handleChange('user')}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default NewCommentForm
