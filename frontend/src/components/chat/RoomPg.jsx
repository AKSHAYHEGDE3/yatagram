import React from 'react'
import Navbar from '../utilities/Navbar'
import Participants from './Participants'
import RoomChat from './RoomChat'

const RoomPg = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
               
                <div className="col-md-6 p-2">
                    <div className="my-5 bg-warning p-1">
                    <RoomChat currentChat={currentChat}/>
                    </div>
                </div>
                <div className="col-md-3 p-2">
                    <div className="my-5 p-3 bg-warning">
                    <h3 style={{ textAlign: "center" }}>Conversations</h3>
                    {conversations.map((c) => {
                    return <div key={conversations._id} onClick={()=>setCurrentChat(c)}> <Participants conversation={c} currentUser={user} /> </div>
                    })}
                    </div>
                </div>
                </div>
            </div>
            <div style={{marginLeft:"10%"}}>
            <Link to="/room"> <button type="button" class="btn btn-danger">Room Chat</button> </Link>
            </div>
    </div>
    )
}

export default RoomPg
