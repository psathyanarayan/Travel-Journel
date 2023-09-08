import React from "react"
import "/src/styles/Card.css"

export default function Card(props) {
    return(
        <div className="card-container">
            <img src={props.item.imageUrl} alt="" srcset="" />
            <div className="card-right">
                <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                    <p>{props.item.location.toUpperCase()}</p>
                    <a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className="card-date">{props.item.startDate}-{props.item.endDate}</p>
                <p className="card-content">{props.item.description}</p>
            </div>
        </div>
    )
}