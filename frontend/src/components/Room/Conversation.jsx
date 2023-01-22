import React from 'react'
import {useState, useEffect} from 'react'

const Conversation = ({conversation,currentUser}) => {

    const [user,setUser]=useState({})

    useEffect(()=>{ 
        // console.log('call')
        const friendId = conversation.members.find(m => m !== currentUser._id )
        const getUser =  async ()=>{
           
         await fetch("http://localhost:5000/user?userId=" + friendId)
         .then(res=>res.json())
         .then(res=>setUser(res))
         .catch(error=>console.log(error))
                    
        }
        getUser()
        
    },
    [conversation,currentUser])

    // console.log(user)

    return (
        <div>
            <div  className="bg-dark text-center text-light p-1 m-1">
                <h5>{user.name}</h5>
            </div>
        </div>
    )
}

export default Conversation
