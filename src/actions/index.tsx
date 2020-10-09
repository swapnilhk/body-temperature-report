export const celsius = () => {
    return {
        type: 'CELSIUS'
    }
}

export const fahrenheit = () => {
    return {
        type: 'FAHRENHEIT'
    }
}

export const invalidNumber = () => {
    return {
        type: "INVALID_NUMBER"
    }
}

export const invalidPrecision = () => {
    return {
        type: "INVALID_PRECISION"
    }
}

export const emptyNumber = () => {
    return {
        type: "EMPTY_NUMBER"
    }
}

export const validNumber = () => {
    return {
        type: "VALID_NUMBER"
    }
}

export const emptyName = () => {
    return {
        type: "EMPTY_NAME"
    }
}

export const validName = () => {
    return {
        type: "VALID_NAME"
    }
}

export const dataAdded = (data:any) => {
    return {
        type: "DATA_ADDED",
        payload: data
    }
}

export const currTempUpdated = (data:any) => {
    return {
        type: "CURR_TEMP_UPDATED",
        payload: data
    }
}

export const invalidCelsiusLow = () => {
    return {
        type: "INVALIC_CELSIUS_LOW"
    }
}

export const invalidCelsiusHigh = () => {
    return {
        type: "INVALIC_CELSIUS_HIGH"
    }
}

export const invalidFahrenheitLow = () => {
    return {
        type: "INVALIC_FAHRENHEIT_LOW"
    }
}

export const invalidFahrenheitHigh = () => {
    return {
        type: "INVALIC_FAHRENHEIT_HIGH"
    }
}
