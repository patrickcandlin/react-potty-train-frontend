import React, { Component } from "react";



// const pottyUrl = "https://albert-potty-train-backend.herokuapp.com/potties";
const pottyUrl = "http://localhost:3090/potties"

export default class PottyForm extends Component {
    state={
      number: "",
      notes: "",
      date: "",
      location: "",
    }
  
    submitPotty = (event) => {
      event.preventDefault()
      this.props.addPotty(this.state)
      const formData = new FormData(event.target)
      fetch(pottyUrl, {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(
                {
                  number: formData.get('number'),
                  notes: formData.get('notes'),
                  date: formData.get('date'),
                  location: formData.get('location'),
                }
                )
             })
        this.setState( {
            number: "",
            notes: "",
            date: "",
            location: "",
        })
    }
  
    handelChange = (event) => {
      const { name, value } = event.target
      this.setState({  
        [name]: value
      })
    }
   
    
    render() {
      const { notes, date } = this.state
     
      return (
  
            <form onSubmit={this.submitPotty} >
              <label>Number:</label>
              <input  
                type="radio" 
                name="number"   
                value="1" 
                onChange={this.handelChange}
                /> 1 
              <input  
                type="radio" 
                name="number"   
                value="2"
                onChange={this.handelChange}
                /> 2


              <label >Notes:</label>
              <input 
                type="text" 
                name="notes" 
                value={notes}
                placeholder="Notes?"
                onChange={this.handelChange}
                className="form-control"
                />
              <label>Date:</label>
              <input 
                type="date" 
                name="date"
                value={date}
                onChange={this.handelChange}
                />

              <label>Location:</label>
              <input 
                type="radio" 
                name="location" 
                value="Carpet" 
                onChange={this.handelChange}
                />Carpet
              <input 
                type="radio" 
                name="location" 
                value="Hardwood"
                onChange={this.handelChange}
                />Hardwood
              <input 
                type="radio" 
                name="location" 
                value="Outside"
                onChange={this.handelChange}
                />Outside
              <input 
                type="radio" 
                name="location" 
                value="Potty"
                onChange={this.handelChange}
                />Potty
              <input 
                type="submit" 
                value="SUBMIT"
                className="btn btn-info"
                />
          </form>
      );
    }
  }