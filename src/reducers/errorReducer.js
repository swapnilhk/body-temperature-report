const errorReducer = (defaultState = "Temprature should not be empty", action) => {
    switch (action.type) {
        case "INVALID_NUMBER":
            return "Invalid number"
        case "INVALID_PRECISION":
            return "Only two digits after decimal"
        case "EMPTY_NUMBER":
            return "Temprature should not be empty"
        case "VALID_NUMBER":
            return ""
        default:
            return defaultState
    }

}

export default errorReducer