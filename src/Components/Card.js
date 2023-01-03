import React from "react"



export default function Card(props){
    console.log(props.item)

    return(
        <div className="card--container">
            <img className="card--image" src={props.item.imageURL} alt="mountain" />
            <div className="card--text-container">
               <img className="card--mapPointer" src={require(`../images/${props.item.mapPointer}`)} alt="map point" />
                <span>{props.item.location}</span>
                <span><a href={props.item.googleMapsUrl}>view on Google Maps</a></span>
                <h1>{props.item.title}</h1>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}