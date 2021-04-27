import React from "react";
import "./ReservationCard.css";

const ReservationCard = ({ id, name, date, time, number}) => {
  return (
    <article className="reservation-card">
      <ul className="reservation-list" id={id}>
        <li className="reservation-name item">{name}</li>
        <li className="item">{date}</li>
        <li className="item">{time}</li>
        <li className="item">Number of guests: {number}</li>
      </ul>
    </article>
  )
}

export default ReservationCard;