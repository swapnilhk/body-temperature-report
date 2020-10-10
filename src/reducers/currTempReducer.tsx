import {Action} from "../interfaces/Action"

const currTempReducer = (state = null, action:Action) => {
    switch (action.type) {
        case "CURR_TEMP_UPDATED":
            return action.payload
        default:
            return state
    }
}

export default currTempReducer