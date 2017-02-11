/**
 * Created by Tatjana Jankova on 10.02.2017.
 */
import React, {Component, PropTypes} from 'react'

class CommentForm extends Component {

    state = {
        user: '',
        text: ''
    }

    handleChangeText = ev => {
        this.setState({
            text: ev.target.value
        })
    }
    handleChangeUser = ev => {
        this.setState({
            user: ev.target.value
        })
    }

    onSubmitForm = ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <label>User: </label>
                <input type="text" value={this.state.user} onChange={this.handleChangeUser}/>
                <label>New Comment: </label>
                <input type="text" value={this.state.text} onChange={this.handleChangeText}/>
                <input type="submit" value="Add comment"/>
            </form>)
    }
}

export default CommentForm




