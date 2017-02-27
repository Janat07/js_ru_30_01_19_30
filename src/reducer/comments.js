import {ADD_COMMENT, LOAD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS,LOAD_COMMENTS_FOR_ARTICLE} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {Map, Record} from 'immutable'



const defaultState = arrayToMap(defaultComments)
const CommentModel = Record({
    id: null,
    user: null,
    text: null,
})

export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            //    return state.set(randomId, {...payload.comment, id: randomId})

            return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: randomId}))

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            console.log('!!! response...', response)
            return comments.update('entities', entities =>
                entities.merge(arrayToMap(response, comment => new CommentModel(comment))))
    }


return state
}