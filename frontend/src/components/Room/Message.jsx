import React from 'react'


const Message = ({message,myMsg}) => {

  const msgClass=myMsg?"sent":"recived"
    // console.log(message)
    return (

        <div className={`message ${msgClass}`}> 
            
                    <div className="chat-img">
                      <img alt="Avtar" src="/img/profile.jpg" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message message">
                        <p>{message.text}</p>
                        {/* <p className="name">{message.createdAt}</p> */}
                      </div>
                    </div>
                 
                  
        </div>
    )
}

export default Message
