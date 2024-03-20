import React from "react"

export default function Card(props) {
    return (
        <div className="card-container">
            <img className="card-img" src={props.item.imageUrl} />
            <div className="text-container">
                <p className="date">{props.item.startDate} - <span>{props.item.endDate}</span></p>
                <h2>{props.item.title}</h2>
                <img className="location" src="./images/location.png" />
                <span className="loc">{props.item.location}</span>
                <span><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )  
}