const currTempReducer = (state = "", action) => {
    switch (action.type) {
        case "CURR_TEMP_UPDATED":
            return action.payload
        default:
            return state
    }
}

export default currTempReducer