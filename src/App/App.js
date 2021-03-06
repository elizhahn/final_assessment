import React, { Component } from 'react';
import Reservations from "../components/Reservations/Reservations";
import ReservationForm from "../components/ReservationForm/ReservationForm";
import './App.css';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        reservations: []
      }
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => {
      this.setState({reservations: [...this.state.reservations, ...data]})
    })
    .catch(error => console.log(error))
  }

  bookReservation = (newReservation) => {
    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReservation)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({reservations: [...this.state.reservations, data]})
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title' data-cy="title">Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm
            bookReservation={this.bookReservation}
          />
        </div>
        <div className='resy-container'>
        <Reservations 
          reservations={this.state.reservations}
        /> 
        </div>
      </div>
    )
  }
}

export default App;
