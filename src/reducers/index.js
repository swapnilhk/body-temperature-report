import tempScaleReducer from './tempScaleReducer'
import errorReducer from './errorReducer'
import nameErrorReducer from './nameErrorReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    tempScale: tempScaleReducer,
    tempError: errorReducer,
    nameError: nameErrorReducer
})

export default rootReducer