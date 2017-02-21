import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload} = action

  /*  switch ('type') {
      case ADD_COMMENT  :
       return {
      ...state
        }
    }*/
    return state
}