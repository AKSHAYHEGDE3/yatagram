import React from 'react'
import { useContext,useState,useEffect } from 'react'


import Post from "../home/Post"
import {UserContext} from "../../UserContext"
import UpdateProfile from "./UpdateProfile"
import "./Profile.css"
import ProfilePic from './ProfilePic'

const Profile = () => {
    const [display, setdisplay] = useState(false)
    const [posts,setPosts]=useState([])
    const {user,setUser}=useContext(UserContext)
    
    useEffect(()=>{

        const fetchPosts=async()=>{
           const fetchposts=await fetch(`http://localhost:5000/getposts/${user._id}`,{
                method:"GET",
                headers:{"Content-type":"application/json"},
            }).then(res=>(res.json())).catch(error=>console.log(error))
        
            const final=await fetchposts
       
            setPosts(final)
            
        }
      fetchPosts()
      
    
    },[user._id])

    const logout=()=>{
        fetch("http://localhost:5000/logout",{method:"GET",credentials:"include"});
        setUser(null)}
    return (
        <div>

          
        <ProfilePic/>
 
         <h3 className="text-light text-center mt-3">{user.name}</h3>
         <h5 className="text-warning text-center mb-5">{user.department}</h5>

      
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                <h5 className="text-light ">Bio: <span className="text-warning">{user.bio}</span></h5>
         <h5 className="text-light ">City: <span className="text-warning">{user.city}</span></h5>
         <h5 className="text-light ">Email: <span className="text-warning">{user.email}</span> </h5>
                </div>
                <div className="col-md-6  text-warning text-center row mt-3">
                    <div className="col-md-3 col-6"><h3>{user.followers.length}</h3>Followers</div>
                    <div className="col-md-3 col-6"><h3>{user.following.length}</h3>Following</div>

                    <div className=" col-md-3 mt-3 col-12">    <button className="btn btn-warning  px-4 w-100" onClick={()=>setdisplay(!display)}>Edit</button></div>
                    <div className="col-md-3 mt-3 col-12"> <button className="btn btn-outline-warning px-4 w-100 " onClick={logout}>
log out
         </button></div>

  
                
                   
                    </div>

            </div>
        </div>
     
        

        
        <div className="container homecontainer">
            
            {display?<UpdateProfile user_id={user._id} setUser={setUser}/>:<></>}
        
        <h3 className="text-warning">Your Posts:</h3>
        {posts.map(post=><Post currentuser={user._id} created_At={post.createdAt} key={post._id} friend_id={user._id} post_id={post._id} user_id={post.userId} Name="You" Caption={post.caption} likes={post.like} img={post.imgUrl}  likedPeople={post.likedPeople}/>)}

        </div>
      
        </div>
    )
}

export default Profile
