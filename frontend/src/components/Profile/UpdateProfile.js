import React from 'react'
import {useState} from "react"
const UpdateProfile = ({user_id,setUser}) => {
   
const [changes,setChanges]=useState({name:"",bio:"",city:"",department:"",user_id:user_id})
const makeChanges=(e)=>{
    e.preventDefault()
    fetch("http://localhost:5000/updateuser",{
        method:"PATCH",
        body:JSON.stringify(changes),
        headers:{"Content-Type":"application/json"},
    }).then(res=>res.json()).then(res1=>setUser(res1))

    

}


    return (
        <div className="m-5">
            <form onSubmit={makeChanges}>
                
        <h5 className="text-warning">Edit Information</h5>
                <input className="form-control" type="text" placeholder="Name" onChange={e=>setChanges({...changes,name:e.target.value})} value={changes.name}></input>
                <input className="form-control" type="text" placeholder="Bio" onChange={e=>setChanges({...changes,bio:e.target.value})} value={changes.bio}></input>
                <input className="form-control" type="text" placeholder="City" onChange={e=>setChanges({...changes,city:e.target.value})} value={changes.city}></input>
                <input className="form-control" type="text" placeholder="Department" onChange={e=>setChanges({...changes,department:e.target.value})} value={changes.department}></input>
                <button className="btn btn-warning" type="submit">Make Changes</button>
            </form>
        </div>
    )
}

export default UpdateProfile
