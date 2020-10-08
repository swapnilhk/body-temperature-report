const nameErrorReducer = (defaultState = "Name should not be empty", action) => {
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