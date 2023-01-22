import React from 'react'
import {useState, useEffect} from 'react'

const Follower = ({userId}) => {

    const [follower,setFollower]=useState({})

    useEffect(()=>{
        // console.log('call')

        const getUser =  async ()=>{
           
         await fetch("http://localhost:5000/user?userId=" + userId)
         .then(res=>res.json() )
         .then(res=>setFollower(res))
         .catch(error=>console.log(error))
                    
        }
        getUser()
        
    },[userId])

    // console.log(user)





    return (
        <div>
            <div  className="bg-dark text-center text-light p-1 m-1">
                <h5>{follower.name}</h5>
            </div>
        </div>
    )
}

export default Follower
