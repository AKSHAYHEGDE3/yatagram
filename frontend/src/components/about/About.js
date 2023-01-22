import React from 'react'
import "./about.css"

const About = () => {
    return (
        <div>

          
    <div className="container-fluid bg-warning  " style={{"backgroundImage": "url(img/background.jpg)","padding":"7%","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
        
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="bg-dark my-3 text-light p-5 left-border">
              <h1 className="text-warning">About Us</h1>
              sdafsadf<br />sdfasd sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="bg-dark my-3 text-light p-5 left-border">
              <h1 className="text-warning">Objective</h1>
              sdafsfad
            </div>
            <div className="bg-dark my-3 text-light p-5 left-border">
              <h1 className="text-warning">Yatagram</h1>
              sdfsadf
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container bg-dark p-5">
        <h1 className="text-warning p-3">Our Team</h1>
      <div className="row">
        <div className="col-md-3 p-3">
            <div className="card bg-warning p-2" >
                <img src="img/profile.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>Tejas Kolwankar</h4>
                    <p> Roll no : 29 </p>
                </div>
              </div>
        </div>
        <div className="col-md-3 p-3">
            <div className="card bg-warning p-2" >
                <img src="img/profile.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>Akshay Hegde</h4>
                    <p> Roll no : 22 </p>
                </div>
              </div>
        </div>
        <div className="col-md-3 p-3">
            <div className="card bg-warning p-2"  >
                <img src="img/profile.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>Yogesh Jain</h4>
                    <p> Roll no : 23 </p>
                </div>
              </div>
        </div>
        <div className="col-md-3 p-3">
            <div className="card bg-warning p-2" >
                <img src="img/profile.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>Mohd. Asim</h4>
                    <p> Roll no : 15 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  
    )
}

export default About
