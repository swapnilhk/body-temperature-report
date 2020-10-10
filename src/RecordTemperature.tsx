import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {celsius,fahrenheit,invalidNumber,invalidPrecision,
    validNumber,emptyNumber,validName,emptyName,dataAdded,
    currTempUpdated,invalidCelsiusLow,invalidCelsiusHigh,
    invalidFahrenheitLow,invalidFahrenheitHigh} from './actions'
import {} from './actions'
import {State} from "./interfaces/State"

function RecordTemperature() {

    const handleSubmit = (event:any) => {
        event.preventDefault()
        let temp = event.target.temp.value
        if(tempScale === "fahrenheit"){
            //convert to celsius
            temp = convertToC(temp)
        }
        dispatch(dataAdded({
            name: event.target.name.value,
            temp: temp,
            time: new Date().toISOString()
        }))
    }
    const convertToF = (c:any) => {
        if(c !== null && c !== ""){
            return (c * 9 / 5) + 32
        }
        else return null


    }
    const convertToC = (f:any) => {
        if(f !== null && f !== ""){
            return (f - 32) * 5 / 9
        }
        else return null
    }
    const tempScale = useSelector((state:State) => state.tempScale)
    const tempError = useSelector((state:State) => state.tempError)
    const nameError = useSelector((state:State) => state.nameError)
    const currTemp = useSelector((state:State) => state.currTemp)
    const data = useSelector((state:State) => state.data)
    const dispatch = useDispatch()
    const handleTempertureInput = (event:any) => {
        const {value} = event.target
        dispatch(currTempUpdated(value))
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
                    //validations for celsius
                    if(tempScale === 'celsius' && value < 30){
                        dispatch(invalidCelsiusLow())
                    }
                    else if(tempScale === 'celsius' && value > 50){
                        dispatch(invalidCelsiusHigh())
                    }
                    //validations for fahrenheit
                    else if(tempScale === 'fahrenheit' && value < 86){
                        dispatch(invalidFahrenheitLow())
                    }
                    else if(tempScale === 'fahrenheit' && value > 122){
                        dispatch(invalidFahrenheitHigh())
                    } 
                    else dispatch(validNumber())
                }
            }
        }
    }
    const handleNameInput = (event:any) => {
        const {value} = event.target
        if(value == null || value === ""){
            dispatch(emptyName())
        }
        else {
            dispatch(validName())
        }
    }
    const handleTempScaleChangeCelsius = () =>{
        dispatch(celsius())
        dispatch(currTempUpdated(convertToC(currTemp)))
    }

    const handleTempScaleChangefahrenheit = () =>{
        dispatch(fahrenheit())
        dispatch(currTempUpdated(convertToF(currTemp)))
     }

    return (
    <React.Fragment>
    <div className="center">
        <label>
            <input 
                type="radio" 
                name="tempScale" 
                value="celsius" 
                checked={tempScale === "celsius"} 
                onChange={handleTempScaleChangeCelsius}/>
            Celsius
        </label>
        <label>
            <input 
                type="radio" 
                name="tempScale" 
                value="fahrenheit" 
                checked={tempScale === "fahrenheit"} 
                onChange={handleTempScaleChangefahrenheit}/>
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
        <input style={{width:"50%"}}
            name="temp" 
            placeholder="Body Temperature" 
            type="text" 
            onChange={handleTempertureInput}
            value={currTemp}/>  {
                tempScale === 'celsius' && currTemp !== null?
                <div style = {{display:"inline"}}>&#8451;</div> : 
                <div style = {{display:"inline"}}>&#8457;</div>}
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
                <td>
                    {tempScale === 'fahrenheit'? 
                    <div style = {{display:"inline"}}>{convertToF(e.temp)}&#8457;</div> : <div style = {{display:"inline"}}>{e.temp}&#8451;</div>}</td>
                <td>{e.time}</td>
            </tr>)}
    </table>
    </React.Fragment>
    )
}

export default RecordTemperature