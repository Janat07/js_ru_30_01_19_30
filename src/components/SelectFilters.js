/**
 * Created by Tatjana Jankova on 14.02.2017.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import DayPicker, {DateUtils} from 'react-day-picker'
import Select from 'react-select'
import {changeFilters} from '../AC/filters'

class SelectFilters extends Component {
    static propTypes = {}
    /*   state = {
     selectedArticles: null,

     }*/


    render() {
        const {articles, filters} = this.props
        const {from, to} = this.props.filters
        const options = articles.map(article => ({
            label: article.title,
            date: article.date,
            value: article.id
        }))
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div>
                <Select
                    options={options}
                    onChange={this.handleSelectChange}
                    value={filters.selectedArticles}
                    multi={true}
                />
                <DayPicker selectedDays={ day => DateUtils.isDayInRange(day, filters) }
                           onDayClick={ this.handleDayClick }/>

                <h3>{selectedRange}</h3>
            </div>
        )
    }


    //handleSelectChange = selectedArticles => this.setState({ selectedArticles })
    handleSelectChange = (selectedArticles) => {
        this.props.changeFilters(
            {
                selectedArticles: selectedArticles.map(article => article.value)
            }
        )
    }

    handleDayClick = (e, day) => {
        const {filters, changeFilters} = this.props
        const range = DateUtils.addDayToRange(day, filters);
        changeFilters(range)
    }
}

export default connect(state => {

    const {articles, filters} = state
    return {articles, filters}

}, {changeFilters})(SelectFilters)