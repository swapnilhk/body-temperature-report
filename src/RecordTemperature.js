import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {celsius,fahrenheit,invalidNumber,invalidPrecision,validNumber,emptyNumber,validName,emptyName,dataAdded} from './actions'
import {} from './actions'

function RecordTemperature() {

    const handleSubmit = (event) => {
        event.preventDefault()
        let temp = event.target.temp.value
        if(tempScale === "fahrenheit"){
            //convert to celsius
            temp = (temp - 32) * 5 / 9
        }
        dispatch(dataAdded({
            name: event.target.name.value,
            temp: temp,
            time: new Date().getTime()
        }))
    }
    const convertToF = (c) => {
        return (c * 9 / 5) + 32
    }
    const tempScale = useSelector(state => state.tempScale)
    const tempError = useSelector(state => state.tempError)
    const nameError = useSelector(state => state.nameError)
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()
    const handleTempertureInput = (event) => {
        const {value} = event.target
        if (value == null || value === ""){
            dispatch(emptyNumber())
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
    <React.Fragment>
    <div class="center">
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
    </div>
    <br/>
    <form onSubmit={handleSubmit}>
        <input 
            name="name"
            placeholder="Name" 
            type="text"
            onChange={handleNameInput}/>
        <div 
            className="error">
            {nameError}
        </div>
        <input
            name= "temp" 
            placeholder="Body Temperature" 
            type="text" 
            onChange={handleTempertureInput}/>
        <div 
            className="error">
            {tempError}
        </div>
        
        <button
            disabled = {tempError !== "" ||  nameError !== ""}>
            Submit
        </button>
    </form>
    <br/>
    <table>
        <tr>
            <th>Name</th>
            <th>Body Temperature</th>
            <th>Reported Time</th>
        </tr>
        {data.map(e => 
            <tr>
                <td>{e.name}</td>
                <td>{tempScale === 'fahrenheit'? convertToF(e.temp): e.temp}</td>
                <td>{e.time}</td>
            </tr>)}
    </table>
    </React.Fragment>
    )
}

export default RecordTemperature