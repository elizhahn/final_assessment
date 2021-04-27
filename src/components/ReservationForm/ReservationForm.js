import React, { Component } from "react";
import "./ReservationForm.css";

class ReservationForm extends Component {
  constructor(props) {
    super(props)
    this.state= {
      name: "",
      date: "", 
      time: "", 
      numGuests: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const numGuests = Number(this.state.numGuests)
    const newReservation = {
      id: Date.now(), 
      name: this.state.name, 
      date: this.state.date, 
      time: this.state.time, 
      number: numGuests
    }
    this.props.bookReservation(newReservation);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          data-cy="name-input"
          className="reservation-input"
          type="text"
          name="name"
          value={this.state.name}
          aria-label="name"
          onChange={this.handleChange}
          placeholder="name"
        />
         <input
         data-cy="date-input"
          className="reservation-input"
          type="text"
          name="date"
          value={this.state.date}
          aria-label="date"
          onChange={this.handleChange}
          placeholder="Date mm/dd"
        />
         <input
          data-cy="time-input"
          className="reservation-input"
          type="text"
          name="time"
          value={this.state.time}
          aria-label="time"
          onChange={this.handleChange}
          placeholder="time"
        />
         <input
          data-cy="number-guests-input"
          className="reservation-input"
          type="text"
          name="numGuests"
          value={this.state.numGuests}
          aria-label="name"
          onChange={this.handleChange}
          placeholder="number of guests"
        />
        <button 
          data-cy="book-reservation-btn"
          type="submit" 
          className="book-reservation-btn">
            Make Reservation
        </button>
      </form>
    )
  }
}

export default ReservationForm; 