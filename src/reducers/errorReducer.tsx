import {Action} from "../interfaces/Action"

const errorReducer = (defaultState = "Temprature should not be empty", action:Action) => {
    switch (action.type) {
        case "INVALID_NUMBER":
            return "Invalid number"
        case "INVALID_PRECISION":
            return "Only two digits after decimal"
        case "EMPTY_NUMBER":
            return "Temprature should not be empty"
        case "INVALIC_CELSIUS_LOW":
            return "Temprature should not be less than 30 degee Celsius"
        case "INVALIC_CELSIUS_HIGH":
            return "Temprature should not be more than 50 degee Celsius"
        case "INVALIC_FAHRENHEIT_LOW":
            return "Temprature should not be less than 86 degee Fahrenheit"
        case "INVALIC_FAHRENHEIT_HIGH":
            return "Temprature should not be more than 122 degee Fahrenheit"
        case "VALID_NUMBER":
            return ""
        default:
            return defaultState
    }

}

export default errorReducer