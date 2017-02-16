/**
 * Created by Tatjana Jankova on 14.02.2017.
 */
import {CHANGE_FILTERS} from '../constants'

const defaultFilters = {
    from: null,
    to: null,
    selectedArticles: []
}


export default (filters = defaultFilters, action) => {
    const {type, payload} = action

    switch (type) {
        case CHANGE_FILTERS:
            return ({...filters, ...payload.change})
    }

    return filters
}