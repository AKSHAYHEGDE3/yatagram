import React from 'react'
import { useState } from 'react'
// import {Link} from "react-router-dom"
// import { UserContext } from '../../UserContext'
// import {io} from 'socket.io-client'

const Chat = () => {
    const [room, setRoom] = useState("")
    const [roompass, setRoompass] = useState("")
    // const {user,setUser}=useContext(UserContext)
    // const socket = useRef();

    // useEffect(()=>{
    //     socket.current=io('ws://localhost:8900')
    //   },[])
    

    const onSubmitHandler= async (e)=>{
        e.preventDefault();
        try{
          await fetch('http://localhost:5000/create-room',{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({name:room,password:roompass,}),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(res=>res.json()).then(r=>console.log(r))
           } catch(error){
            console.log(error)
           }

           setRoom("")
           setRoompass("")
    
    }

    return (
        <div>
   
            <div className="container" style={{"marginTop":"10%"}}>
        <div className="row">
            <div className="col-md-6">
                <main className="form-signin">
                    <form onSubmit={e=>onSubmitHandler(e)}>
                        <h1 className="h3 mb-3 fw-normal text-light">Create Room</h1>

                        <div className="form-floating">
                            <input type="name" className="form-control" id="floatingInput" placeholder="name"
                            value={room} 
                            onChange={e=>setRoom(e.target.value)}/>
                            <label for="floatingInput">Room Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  
                            value={roompass} 
                            onChange={e=>setRoompass(e.target.value)}/>
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Create Room</button>
                       
                    </form>
                </main>
            </div>


            <div className="col-md-6">
                <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal text-light">Create Room</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Room Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Join Room</button>
                       
                    </form>
                </main>
            </div>
            
        </div>


    </div>

       
        </div>
    )
}

export default Chat
