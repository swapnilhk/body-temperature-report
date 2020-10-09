import {Action} from "../interfaces/Action"

const dataReducer = (state = [], action:Action) => {
    switch (action.type) {
        case "DATA_ADDED":
            state.push()
            return [
                ...state,
                action.payload,
            ];
        default:
            return state
    }
}

export default dataReducer