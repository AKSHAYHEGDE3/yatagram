import React from 'react'
import {useState} from "react"
import { userRequest } from '../../axios'
const AddPost = ({posts,setPosts,user}) => {
    
const [image, setimage] = useState("")
const [newpost, setnewpost] = useState({caption:"",like:0,user:user.name,imgUrl:"",userId:user._id})
const [postbutton, setpostbutton] = useState(true)

const imageUpload=(e)=>{
  
    e.preventDefault()

  console.log("called")

  setpostbutton(false)

    let data = new FormData();
    data.append("file",image);
    data.append("api_key",495674683468576)
    data.append("upload_preset","yatagram-images");
    data.append("cloud_name","yatagram")
    console.log(data)
     fetch("https://api.cloudinary.com/v1_1/yatagram/upload",{
        method:"post",
        body:data
    }).then(res=>res.json()).then(result=>{setnewpost({...newpost,imgUrl:result.url});setpostbutton(true)})
 
    console.log("sadf",image)
   

    

    

}


const submitFunction=(e)=>{
    e.preventDefault()
   
    // console.log(newpost.imgUrl)
    // fetch("http://localhost:5000/add-post",{
    // method:"POST",
    // headers:{"Content-Type":"application/json"},
    // body:JSON.stringify(newpost)
// })
userRequest.post("add-post",newpost).then(res=>res.data).then(res=>setPosts([...posts,res]))
}


// const onPostSubmit =(e)=>{
// e.preventDefault();

// imageUpload()

// submitFunction()
// setnewpost({content:"",caption:"",like:"",user:"",imgUrl:""})
// }

    return (
        <div>

        <form onSubmit={e=>submitFunction(e)}> 
            <h4 className="text-warning">ADDPOST</h4>
            {/* <input className="form-control" placeholder="content" value={newpost.content} onChange={e=>setnewpost({...newpost,content:e.target.value})}/> */}
            <input className="form-control" type="text" placeholder="caption" value={newpost.caption} onChange={e=>setnewpost({...newpost,caption:e.target.value})}/>
           
            {/* <input className="form-control" placeholder="likes" value={newpost.like} onChange={e=>setnewpost({...newpost,like:e.target.value})}/> */}
           <input type="file" onChange={e=>  setimage(e.target.files[0])} className="form-control" />
  <button  onClick={e=>imageUpload(e)} className="btn btn-warning m-2">upload</button>
  {postbutton?   <button className="btn btn-warning" type="submit" id="post-button">Post</button>:<div className="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>}
         
  </form>
           
        </div>
    )
}

export default AddPost
