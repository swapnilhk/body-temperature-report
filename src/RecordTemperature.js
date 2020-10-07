import React from 'react'

class RecordTemperature extends React.Component{

    constructor(){
        super()
        this.state = {
            tempError : "",
            tempScale : "celsius"
        }
        console.log(this.state)
    }

    handleSubmit = () => {
        console.log("Hi")
    }

    handleTempertureInput = (event) => {
        const {value} = event.target
        let patt = /^((\d+)|(\d+\.\d{1,}))$/;
        let x = value.search(patt)
        if(x === -1){
            this.setState(prevState => {
                prevState.tempError = "Invalid number"
                return prevState
            })
        }
        else{
            let temp = value.split(".")
            if(temp[1] != null && temp[1].length > 2){
                this.setState(prevState => {
                    prevState.tempError = "Only two digits after decimal"
                    return prevState
                })
            }
            else{
                this.setState(prevState => {
                    prevState.tempError = ""
                    return prevState
                })
            }
        }
        console.log(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        console.log(name+" "+value)
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Name" type="text"/><br/>
                <input placeholder="Body Temperature" type="text" value ={this.state.temp} onChange={this.handleTempertureInput}/><div className="error">{this.state.tempError}</div><br/>
                <label><input type="radio" name="tempScale" value="celsius" checked={this.state.tempScale === "celsius"} onChange={this.handleChange}/>Celsius</label>
                <label><input type="radio" name="tempScale" value="fahrenheit" checked={this.state.tempScale === "fahrenheit"} onChange={this.handleChange}/>Fahrenheit</label>
            </form>
        )
    }
}

export default RecordTemperature