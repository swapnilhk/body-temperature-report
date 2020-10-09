const dataReducer = (state = [], action) => {
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