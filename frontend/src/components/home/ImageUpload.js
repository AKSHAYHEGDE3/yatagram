import React from 'react'
import { useState } from 'react'
const ImageUpload = () => {
    const [fileData, setfileData] = useState("")
    const [image, setImage] = useState("")
    



const handleImage=({target})=>{
setfileData(target.files[0])
setImage(target.value)
console.log(fileData)
}

const handleSubmit=(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("image",fileData)
    
}
    
    return (
        <div>
            <form onSubmit={e=>handleSubmit(e)}>
            <input
            value={image}
            type="file"
            name="file"
            accept="image/*"
            placeholder="upload image"
            isRequired={true}
            onChange={handleImage}
            />
                </form>
               
        </div>
    )
}

export default ImageUpload
