import React from "react"

import './Places.css'

function Places(prop){
    return( 
        <div className="places">
            <img src={prop.place.imageUrl} alt={prop.place.title}/>
            
            <section className="details">

                <div className="location">
                    <i className='fa fa-map-marker'></i>
                    <p>{prop.place.title.toUpperCase()}</p>
                    <a href={prop.place.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1 className="spot">{prop.place.title}</h1>
                <p className="dates">{prop.place.startDate} - {prop.place.endDate}</p>
                <p className="description">{prop.place.description}</p>

            </section>

        </div>
    )
}

export default Places