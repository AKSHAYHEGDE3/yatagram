import React from 'react'
import { useState } from 'react'

import { userRequest } from '../../axios'
const Admin = () => {
    const [event, setevent] = useState({name:"",description:"",link:""})

    const addEvent=async (e)=>{
        e.preventDefault()

        // fetch("http://localhost:5000/post-events",{
        //    method:"POST",
        //    headers:{"Content-Type":"application/json"},
        //    body:JSON.stringify(event)
        // }).then(res=>res.json()).then(res=>console.log(res)).then(setevent({name:"",description:"",link:""}))

         await userRequest.post("post-events",event).then(res=>res.data)
   
    }
    return (
        <div className='container p-5'>
            <h1 className="text-warning pb-5">Welcome To The Admin Panel</h1>
            <form className="form-control bg-dark p-5" onSubmit={e=>addEvent(e)}>
                <h3 className="text-warning pb-5">Add New Events</h3>
                <input placeholder="name" value={event.name} className="form-control mb-5" onChange={e=>setevent({...event,name:e.target.value})}/>
                <textarea placeholder="description" type="textarea" value={event.description} className="form-control mb-5" onChange={e=>setevent({...event,description:e.target.value})}/>
                <input placeholder="Know More Link" value={event.link} className="form-control mb-5" onChange={e=>setevent({...event,link:e.target.value})}/>
                <button className="btn btn-warning">ADD EVENT</button>
            </form>
        </div>
    )
}

export default Admin
