import tempScaleReducer from './tempScaleReducer'
import errorReducer from './errorReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    tempScale: tempScaleReducer,
    tempError: errorReducer
})

export default rootReducer