import React from 'react'

const Msg = () => {
    return (
        <div>
             <li className={myMsg ? "out" : "in"}>
                    <div className="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message">
                        <p>{message.text}</p>
                        {/* <p className="name">{message.createdAt}</p> */}
                      </div>
                    </div>
                  </li>
        </div>
    )
}

export default Msg
