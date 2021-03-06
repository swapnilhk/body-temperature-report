import tempScaleReducer from './tempScaleReducer'
import errorReducer from './errorReducer'
import nameErrorReducer from './nameErrorReducer'
import dataReducer from './dataReducer'
import currTempReducer from './currTempReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    tempScale: tempScaleReducer,
    tempError: errorReducer,
    nameError: nameErrorReducer,
    data: dataReducer,
    currTemp: currTempReducer
})

export default rootReducer