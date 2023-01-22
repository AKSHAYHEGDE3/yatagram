import React from 'react'

const SingleEvent = ({event}) => {
    return (
        <div>

            <div className="card bg-dark border border-warning my-2 text-light" style={{"width": "100%"}}>
            <div className="row no-gutters">
                <div className="col-sm-5">
                    <img className="card-img" alt="new image1" src="img/carousel-1.jpg" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h3 className="card-title text-warning">{event.name}</h3>
                        <p className="card-text"><span className="text-warning">Event Description: </span> {event.description}</p>
                        <a href={event.link} className="btn btn-warning">Know More</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SingleEvent
