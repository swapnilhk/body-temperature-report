import {Action} from "../interfaces/Action"

const tempScaleReducer = (status = "celsius", action:Action) => {
    switch (action.type) {
        case 'CELSIUS':
            return 'celsius'
        case 'FAHRENHEIT':
            return 'fahrenheit'
        default:
            return status
    }
}

export default tempScaleReducer