import React from 'react'
import Msg from './Msg'

const RoomChat = () => {
    return (
        <div>
             <div className="card">
              <div className="card-body height3">
              {
                  currentChat ? ( <>
                <ul className="chat-list"> 
                {
                  messages.map(m=>{
                    return <div key={m._id} ref={scrollRef}><Msg  message={m} myMsg={m.sender === user._id} /> </div>
                  })
                }
                
                </ul>
                  
                <div className="row">
                  <div className="col-md-10 col-xs-10">
                    <input className="form-control" placeholder="your message"
                     onChange={e=>setNewMessage(e.target.value)} 
                     value={newMessage}  />
                  </div>
                  <button className="btn btn-dark col-md-2 col-xs-1" onClick={handleSubmit}>send</button>
                </div>
                 </>  ) : ( <div style={{textAlign:"center"}} >start a chat</div>  )}
              </div>
            </div>
        </div>
    )
}

export default RoomChat
