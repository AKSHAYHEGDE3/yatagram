import React from 'react'
import { Link } from 'react-router-dom'
const UserCard = ({username,user_id}) => {
    return (
        <div>
             <div className="m-2 p-1 border border-warning"><h5 className="text-light">{username} </h5><div className="text-end"><Link className="btn btn-warning text-dark"  to={`/profile/${user_id}`} >visit</Link></div> </div>
        </div>
    )
}

export default UserCard
