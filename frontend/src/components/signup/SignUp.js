import React from "react";
import { useState, useContext } from "react";

import { UserContext } from "../../UserContext";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { userRequest,publicRequest } from "../../axios";

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    college_id: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    college_id: "",
  });

  const submitHandler = async (e) => {
    console.log("click");
    e.preventDefault();
    setErrors(errors);

    try {
      // const res = await fetch("http://localhost:5000/signup", {
      //   method: "POST",
      //   credentials: "include",
        // body: JSON.stringify({
        //   name: details.name,
        //   email: details.email,
        //   password: details.password,
        //   college_id: details.college_id,
        // }),
      //   headers: { "Content-Type": "application/json" },
      // });
      console.log(details);
      const data = await publicRequest.post("signup",{
        name: details.name,
        email: details.email,
        password: details.password,
        college_id: details.college_id,},{withCredentials:true}
      ).then(res=>res.data)
        console.log(data.user)
      if (data.errors) {
        setErrors({
          emailError: data.errors.email,
          usernameError: data.errors.name,
          passwordError: data.errors.password,
        });
      }
      if (data.user) {
        setUser(data.user);
        console.log(user)
        const token = user.token
        localStorage.setItem('token',token)
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <div>
      <div className="hello page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className=" card-4">
            <div className="card-hello">
              <h2 className="title">Signup</h2>
              <form onSubmit={(e) => submitHandler(e)}>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="sinput-group">
                      <label className="label">College ID</label>
                      <input 
                        type="text"
                        className="sinput--style-4 sinput"
                        id="clg_ID"
                        name="clg_ID"
                        value={details.college_id}
                        onChange={(e) =>
                          setDetails({ ...details, college_id: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="sinput-group">
                      <label className="label">Username</label>
                      <input 
                        type="text"
                        className="sinput--style-4 sinput"
                        id="username"
                        name="name"
                        value={details.name}
                        onChange={(e) => {
                          setDetails((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="text-danger" type="password">
                      {errors.usernameError}
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="sinput-group">
                      <label className="label">Email ID</label>
                      <input 
                        type="email"
                        className="sinput sinput--style-4"
                        id="email"
                        name="email"
                        value={details.email}
                        onChange={(e) => {
                          setDetails((prevState) => ({
                            ...prevState,
                            email: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="text-danger" type="password">
                      {errors.emailError}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="sinput-group">
                      <label className="label">Birthday</label>
                      <input 
                        type="date"
                        className="sinput sinput--style-4"
                        id="age"
                        name="age"
                        // value={details.date}
                        onChange={(e) => e.target.value}
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="sinput-group">
                      <label className="label">Password</label>
                      <input 
                        type="password"
                        className=" sinput sinput--style-4"
                        id="password1"
                        name="password1"
                        value={details.password}
                        onChange={(e) => {
                          setDetails((prevState) => ({
                            ...prevState,
                            password: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="text-danger" type="password">
                      {errors.passwordError}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="sinput-group">
                      <label className="label">Confirm Password</label>
                      <input 
                        type="password"
                        className="sinput sinput--style-4"
                        id="password2"
                        name="password2"
                        // value={details.confirm_password}
                        onChange={(e) => e.target.value}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-t-15 row">

                  <div className="col-5  col-md-6  col-sm-6">  <button
                    className="signupbtn btn--radius-2 btn--signup"
                    type="submit"
                  >
                    SignUp
                  </button></div>
                  <div className="col-5  col-md-6  col-sm-6">
                  <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/signin"
                    
                  >
                    <button
                    className="signupbtn btn--radius-2 mx-3 btn--login"
                    type="submit"
                  >
                    
                  LogIn
                  </button>
                    </Link>
                  </div>
                     
                
                  
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {user}
    </div>
  );
};

export default SignUp;
