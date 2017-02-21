/**
 * Created by Tatjana Jankova on 19.02.2017.
 */

export default store => next => action => {
    const { randomId, ...rest} = action
    if (!action.randomId) return next(action)

    next({
        ...rest,
        randomId: Date.now() + Math.random()
    })
}