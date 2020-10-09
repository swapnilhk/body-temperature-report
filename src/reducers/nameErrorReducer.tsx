import {Action} from "../interfaces/Action"

const nameErrorReducer = (defaultState = "Name should not be empty", action:Action) => {
    switch (action.type) {
        case "EMPTY_NAME":
            return "Name should not be empty"
        case "VALID_NAME":
            return ""
        default:
            return defaultState
    }
}

export default nameErrorReducer