/**
 * Created by Tatjana Jankova on 10.02.2017.
 */
import React, {Component, PropTypes}from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';

import 'react-day-picker/lib/style.css';


class MyDatePicker extends Component {

    state = {
        from: null,
        to: null,
    }
    handleDayClick=(e, day)=> {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
        console.log('--',this.state)
    }
    handleResetClick=(e)=> {
        e.preventDefault()
        this.setState({
            from: null,
            to: null,
        })
    }
    render() {
        const { from, to } = this.state
        return (
            <div>
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    Selected range: { (from).toLocaleDateString() } to { (to).toLocaleDateString() }.
                    { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        )
    }

}
export default MyDatePicker