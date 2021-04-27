import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import "./Reservations.css";

const Reservations = ({ reservations }) => {
  const reservationList = reservations.map(reservation => {
    return <ReservationCard 
              key={reservation.id}
              id={reservation.id}
              name={reservation.name}
              date={reservation.date}
              time={reservation.time}
              number={reservation.number}
            />
  })

  return (
    <main className="reservations-container">
      {reservationList}
    </main>
  )
}

export default Reservations;