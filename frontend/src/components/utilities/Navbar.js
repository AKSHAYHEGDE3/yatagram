import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {UserContext} from "../../UserContext"
import SearchModal from '../home/search/SearchModal'

const Navbar = () => {

  const {user}=useContext(UserContext)
    return (
        <div>
          <SearchModal/>
             <nav className="navbar navbar-expand-lg navbar-dark bg-trans fixed-top" >
      <div className="container">
        <Link className="navbar-brand" to="/"><h3>
            <span className="text-warning">Yata</span>
            <span className="text-light">gram</span>
          </h3></Link>
          <i type="button" className="me-auto fa fa-fw fa-search " data-bs-toggle="modal" data-bs-target="#exampleModal" ></i>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
           
          
         
          
       
{user?<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
      
              <Link className="nav-link active mx-3" to="/"><div className='navi'><i className=" fa fa-fw fa-home"></i><p className='nav-name'>home</p></div></Link>
            </li>
            <li className="nav-item">
            
              <Link className="nav-link active mx-3" to="/chat">  <div className='navi'><i className="far fa-comment "></i><p className='nav-name'>chat</p></div>   </Link>
          </li>
            <li className="nav-item">
               
                <Link className="nav-link active mx-3" to="/about"><div className='navi'><i className="fa fa-info-circle"></i><p className='nav-name'>about</p></div></Link>
            </li>
            <li className="nav-item">
               
                <Link className="nav-link active mx-3" to="/events"><div className='navi'><i className="fas fa-headphones"></i><p className='nav-name'>events</p></div></Link>
            </li>

            <li className="nav-item">
             
                <Link className="nav-link active mx-3" to={`/my-profile/`}> <div className='navi'><i className="far fa-user-circle"></i> <p className='nav-name'>profile</p></div></Link>
            </li>
            
           
         <li className="nav-item text-warning mt-2"><h5>{user.name}</h5></li>
           
          </ul>:<></>}
          
        </div>
      </div>
    </nav>
        </div>
       
    )
}

export default Navbar