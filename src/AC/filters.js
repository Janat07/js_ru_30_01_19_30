/**
 * Created by Tatjana Jankova on 14.02.2017.
 */
import {CHANGE_SELECTION} from '../constants'
import {CHANGE_DATE_FILTER} from '../constants'
import {CHANGE_FILTERS} from '../constants'


/*export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {selected}
    }
}

export function changeDateFilter(dateRange) {
    return {
        type: CHANGE_DATE_FILTER,
        payload: {dateRange}
    }
}*/

export function changeFilters(change) {
    return{
        type: CHANGE_FILTERS,
        payload: {change}
    }
}