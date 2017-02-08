/**
 * Created by Tatjana Jankova on 07.02.2017.
 */
import React from 'react'

export default (Component) => class OneOpen extends React.Component {

    state = {
        openItemId: null,

    }

    openItem = openItemId => ev => {
        if (ev) ev.preventDefault()
        this.setState({openItemId})
    }

    toggleOpen = id => ev => {

        this.setState({
            openItemId: this.isItemOpen(id) ? null : id
        })
    }

    isItemOpen = id => this.state.openItemId == id

    render() {
        return <Component {...this.props}{...this.state} openItem={this.openItem}
                          toggleOpen={this.toggleOpen} isItemOpen={this.isItemOpen}/>
    }
}