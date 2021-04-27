import React, { Component } from "react";
import "./ReservationForm.css";

class ReservationForm extends Component {
  constructor() {
    super()
    this.state= {
      name: "",
      date: "", 
      time: "", 
      numGuests: 0
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  onSubmit = (event) => {
    event.preventDefault(); 
  }


  render() {
    console.log(this.state)
    return (
      <form>
        <input
          className="reservation-input"
          type="text"
          name="name"
          value={this.state.name}
          aria-label="name"
          onChange={this.handleChange}
          placeholder="name"
        />
         <input
          className="reservation-input"
          type="text"
          name="date"
          value={this.state.date}
          aria-label="date"
          onChange={this.handleChange}
          placeholder="Date mm/dd"
        />
         <input
          className="reservation-input"
          type="text"
          name="time"
          value={this.state.time}
          aria-label="time"
          onChange={this.handleChange}
          placeholder="time"
        />
         <input
          className="reservation-input"
          type="text"
          name="numGuests"
          value={this.state.numGuests}
          aria-label="name"
          onChange={this.handleChange}
          placeholder="number of guests"
        />
        <button className="book-reservation-btn">Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm; 