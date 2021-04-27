import React from "react";

const ReservationCard = ({ id, name, date, time, number}) => {
  return (
    <article className="reservation-card">
      <ul id={id}>
        <li>{name}</li>
        <li>{date}</li>
        <li>{time}</li>
        <li>Number of guests: {number}</li>
      </ul>
    </article>
  )
}

export default ReservationCard;