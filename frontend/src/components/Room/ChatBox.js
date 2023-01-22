import React from 'react'
import Message from './Message'
import { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "../../UserContext";
import {io} from 'socket.io-client'



const ChatBox = ({currentChat}) => {
    const { user } = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const socket = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const scrollRef = useRef();
    
   
  // console.log(socket)
  // console.log(currentChat)

  useEffect(()=>{
    socket.current=io('ws://localhost:5000')
    socket.current.on("getMessage",data=>{
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  },[])



   useEffect(()=>{
    const getMessasges = async ()=>{
      await fetch("http://localhost:5000/message/" + currentChat?._id)
      .then(res=>res.json())
      .then(res=>setMessages(res))
      .catch((error)=>console.log(error))
    }
    getMessasges()
  },[currentChat])

  useEffect(()=>{
    socket.current.emit("addUser",user._id);
    socket.current.on("getUsers",users=>{console.log(users)})
  },[user])

  

  useEffect(()=>{
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
    setMessages(prev=>[...prev,arrivalMessage])
  },[arrivalMessage,currentChat])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const msg = {
      sender : user._id,
      text : newMessage,
      conversationId : currentChat._id
    }
    
    console.log(currentChat.members.find(m=>m!==user._id))
   
    socket.current.emit("sendMessage",{
      
      senderId:user._id,
      receiverId:currentChat.members.find(member=>member !== user._id),
      text:newMessage
    })

    try{
    fetch("http://localhost:5000/message", {
    method: "POST",
    body: JSON.stringify(msg),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => setMessages([...messages,json]));
setNewMessage('')
    } catch(err){
      console.log(err)
    }
    

  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

    // console.log(messages)

    return (
        <div>
            <div className="card">
              <div className="card-body height3" style={{backgroundColor:"black"}} >

        {currentChat?(<div> <main>
{
messages.map(m=>{
  return < div key={m._id} ref={scrollRef}><Message  message={m} myMsg={m.sender === user._id} /> </div>
})
}
</main>
<div className="row mt-1">
<div className="col-md-10 col-9">
  <input className="form-control" placeholder="your message"
   onChange={e=>setNewMessage(e.target.value)} 
   value={newMessage}  />
</div>
<button className="btn btn-dark col-md-2 col-3" onClick={handleSubmit}>send</button>
</div></div>):(<div style={{textAlign:"center",color:"#fff"}}>start a chat</div>)}
                
              {/* {
                  currentChat ? ( <>
                <ul className="chat-list"> 
                {
                  messages.map(m=>{
                    return < div key={m._id} ref={scrollRef}><Message  message={m} myMsg={m.sender === user._id} /> </div>
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
                 </>  ) : ( <div style={{textAlign:"center",color:"#fff"}}>start a chat</div>  )} */}
                 
              </div>
            </div>
        </div>
    )
}

export default ChatBox
