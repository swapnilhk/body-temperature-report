const errorReducer = (state = "", action) => {
    switch (action.type) {
        case "INVALID_NUMBER":
            return "Invalid number"
        case "INVALID_PRECISION":
            return "Only two digits after decimal"
        case "VALID_NUMBER":
                return ""
        default:
            return state
    }

}

export default errorReducer