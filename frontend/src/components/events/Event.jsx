import React from 'react'
import SingleEvent from './SingleEvent'
import {useEffect,useState} from "react"
import "./Event.css"
import { userRequest } from '../../axios'

const Event = () => {
    const [events,setEvents]=useState([])
useEffect(()=>{
    userRequest.get("get-events").then(res=>res.data).then(res=>setEvents(res))
})
    return (
        <div>
            {/* Hero Image
            with caption as upcoming event
            event cards */}


<div id="carouselExampleControls" className="carousel slide border border-warning" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/carousel-4.jpg" style={{height:"80vh",imageRendering:"auto"}} className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
        <h1 className="caption-header text-warning">UPCOMING EVENTS</h1>
       
      </div>
    </div>
    {/* <div className="carousel-item">
      <img src="img/carousel-2.png" style={{height:"80vh"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="img/carousel-3.png" style={{height:"80vh"}} className="d-block w-100" alt="..."/>
    </div> */}
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>

    {/* <h1 className="text-light">Upcoming Events</h1> */}
            <div className="container">
                <h3 className="text-warning my-3">Events</h3>
            {events.map(e=><SingleEvent event={e} key={e._id}/>)}
            </div>
          
       
        </div>
    )
}

export default Event
