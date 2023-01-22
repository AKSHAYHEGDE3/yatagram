import React from 'react'
import { Link } from 'react-router-dom'

const Comments = ({name,text}) => {
    return (
        <div style={{paddingLeft:"1rem"}}>
            <div ><h5><i style={{color:"#fee600"}} className="far fa-user-circle"></i><Link  to="/" style={{color:"#fee600",textDecoration:"none",marginLeft:"10px"}}>{name}</Link> </h5></div>
            <div>{text}</div>
            <hr />
        </div>
    )
}

export default Comments
