import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {celsius,fahrenheit,invalidNumber,invalidPrecision,validNumber,emptyNumber,validName, emptyName} from './actions'
import {} from './actions'

function RecordTemperature() {

    const handleSubmit = () => {
        console.log("Hi")
    }
    const tempScale = useSelector(state => state.tempScale)
    const tempError = useSelector(state => state.tempError)
    const nameError = useSelector(state => state.nameError)
    const dispatch = useDispatch()
    const handleTempertureInput = (event) => {
        const {value} = event.target
        if (value == null || value === ""){
            dispatch(emptyNumber())
            console.log("ddddd")
        }
        else{
            let patt = /^((\d+)|(\d+\.\d{1,}))$/;
            let x = value.search(patt)
            if(x === -1){
                dispatch(invalidNumber())
            }
            else{
                let temp = value.split(".")
                if(temp[1] != null && temp[1].length > 2){
                    dispatch(invalidPrecision())
                }
                else{
                    dispatch(validNumber())
                }
            }
        }
    }
    const handleNameInput = (event) => {
        const {value} = event.target
        if(value == null || value === ""){
            dispatch(emptyName())
        }
        else {
            dispatch(validName())
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <input 
            placeholder="Name" 
            type="text"
            onChange={handleNameInput}/>
        <div 
            className="error">
            {nameError}
        </div>
        <input 
            placeholder="Body Temperature" 
            type="text" 
            onChange={handleTempertureInput}/>
        <div 
            className="error">
            {tempError}
        </div>
        <label>
            <input 
                type="radio" 
                name="tempScale" 
                value="celsius" 
                checked={tempScale === "celsius"} 
                onChange={() => dispatch(celsius())}/>
            Celsius
        </label>
        <label>
            <input 
                type="radio" 
                name="tempScale" 
                value="fahrenheit" 
                checked={tempScale === "fahrenheit"} 
                onChange={() => dispatch(fahrenheit())}/>
            Fahrenheit
        </label>
        <br/>
        <button>Submit</button>
    </form>
    )
}

export default RecordTemperature