import React from 'react'
import UserCard from './UserCard'
import { useState } from 'react'
import "./Search.css"
import { userRequest } from '../../../axios'
const SearchModal = () => {
    const [query, setQuery] = useState("")
    const [searchResult, setSearchResult] = useState(["",''])

    const searchUser=(e)=>{
        e.preventDefault()
        setQuery(e.target.value)

        // fetch("http://localhost:5000/search-users",{
        //     method:"POST",
        //     headers:{"Content-type":"application/json"},
        //     body:JSON.stringify({query})
        // })
        userRequest.post("search-users",{query}).then(res=>setSearchResult(res.data)).catch(err=>console.log(err))

    }


    return (
        <div>
            

          <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
  <div className="modal-dialog modal-dialog-scrollable" data-backdrop="false">
    <div className="modal-content text-warning bg-dark">
      <div className="modal-header">
        <h5 className="modal-title " id="exampleModalLabel">User Search</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input className="form-control bg-dark text-warning" placeholder="search" value={query} onChange={e=>searchUser(e)}/>

       {/* <UserCard username="Tejas Kolwankar" user_id="123"/>
       <UserCard username="Tejas Kolwankar" user_id="123"/>
       <UserCard username="Tejas Kolwankar" user_id="123"/>
       <UserCard username="Tejas Kolwankar" user_id="123"/> */}
      {searchResult.map(res=><UserCard username={res.name} user_id={res._id}/>)}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>  
        </div>
    )
}

export default SearchModal
