const tempScaleReducer = (status = "celsius", action) => {
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