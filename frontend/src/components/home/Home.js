import React from 'react'


import "./Home.css"
import Post from './Post'
import {useEffect,useState,useContext} from "react"
import AddPost from './AddPost'

import {UserContext} from "../../UserContext"
import { userRequest } from '../../axios'
// import ProfilePic from '../Profile/ProfilePic'
// import SearchModal from './search/SearchModal'

const Home = () => {

    // eslint-disable-next-line
const {user,setUser} = useContext(UserContext)

const [dis,setDis]=useState(false)

    const [posts, setPosts] = useState([])
    const [finalPosts, setFinalPosts] = useState([])
    
    useEffect(() => {
       const fetcher=async()=>{
    //  await fetch("http://localhost:5000/get-post",{
    //         method:"POST",
    //         body:JSON.stringify({following:user.following,userId:user._id}),
    //         headers:{"Content-type":"application/json"},
    //     })

            userRequest.post("get-post",{following:user.following,userId:user._id}).then(res=>res.data).then(res=>setPosts(res)).catch(error=>console.log(error))
     
    }
    fetcher()},
    [user.following,user._id])


useEffect(() => {
    
    setFinalPosts(
        posts.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }))
}, [posts])

// const fetchPosts=async()=>{
//     //console.log(user.following)
//     //const followings=user.following
//     const fetchposts=await fetch("http://localhost:5000/get-post",{
//         method:"POST",
//         body:JSON.stringify({following:user.following,userId:user._id}),
//         headers:{"Content-type":"application/json"},
//     }).then(res=>res.json()).then(res=>setPosts(res)).catch(error=>console.log(error))

//     return fetchposts;
// }




    return (
        <div>
        
   

   <div className="fixed-bottom  col-md-12 col-lg-3 border border-warning p-3 addpost-form bg-dark"><button onClick={()=>setDis(!dis)} className="btn btn-warning m-2 ">+</button> {dis?<AddPost posts={posts} setPosts={setPosts} user={user}/>:<></>} </div>
           

           {/* <Link to="/comments"> <button  className="btn btn-warning mt-2 ">comments</button> </Link> */}
            <div className="container homecontainer">
              {/* <SearchModal/> */}
                
            
                    
           {
           finalPosts.length>0?
           
           finalPosts.map(post=><Post currentuser={user._id} created_At={post.createdAt} key={post._id} friend_id={user._id} post_id={post._id} user_id={post.userId} Name={post.user} Caption={post.caption} likes={post.like} img={post.imgUrl}  likedPeople={post.likedPeople}/>):<h3 className="text-warning">No Posts</h3>
           }
       {/* <p className="text-light">{o}</p> */}

            
           
            
       </div>
    </div>
    )
}

export default Home



