import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {celsius,fahrenheit,invalidNumber,invalidPrecision,validNumber} from './actions'
import {} from './actions'

function RecordTemperature() {

    const handleSubmit = () => {
        console.log("Hi")
    }
    const tempScale = useSelector(state => state.tempScale)
    const tempError = useSelector(state => state.tempError)
    const dispatch = useDispatch()
    const handleTempertureInput = (event) => {
        const {value} = event.target
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
    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(name+" "+value)
        this.setState({
            [name] : value
        })
    }

    return (
    <form>
        <input 
            placeholder="Name" 
            type="text"/><br/>
        
        <input 
            placeholder="Body Temperature" 
            type="text" 
            onChange={handleTempertureInput}/>
                <div 
                    className="error">
                    {tempError}
                </div>
                <br/>
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
        </form>
    )
}

export default RecordTemperature