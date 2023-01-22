// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import {useState,useEffect} from 'react';
import { UserContext } from './UserContext';
import About from "./components/about/About"
import Home from './components/home/Home';
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"
import Profile from './components/Profile/Profile';
import Profile1 from "./components/Profile1/Profile1"
import Chat from './components/chat/Chat';
import Room from './components/Room/Room';

import CommentBox from './components/home/comments/CommentBox';
import Navbar from './components/utilities/Navbar';
import Event from './components/events/Event';
import Admin from './components/admin/Admin';
import { userRequest } from './axios';
function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {



    const verifyUser = async () => {
      try {
        
        // const res = awa
        //  await fetch('http://localhost:5000/verifyuser', {
        // method:"GET",  
        // credentials: 'include',
        //   headers: { 'Content-Type': 'application/json' },
        //   // body:JSON.stringify({cookie})
        // });
        console.log('app')
        const data = await userRequest.get("verifyUser", { withCredentials: true }).then(res=>res.data)
        console.log(data)
        setUser(data);
      } catch (error) {
        console.log(error)
      }


    }
    verifyUser()
    

  }, [])




  return (

<Router>
<div className="App">
<UserContext.Provider value={{user,setUser}}>
<Navbar/>

<Switch>

    <Route exact path="/" >{user?<Home/>:<Login/>}</Route>
    <Route path="/about" >{user?<About/>:<Login/>}</Route>
    <Route path="/signin" >{user?<Redirect to="/"/>:<Login/>}</Route>
    <Route path="/signup" >{user?<Redirect to="/"/>:<SignUp/>}</Route>
    <Route path="/chat">{user?<Room/>:<Login/>}</Route>
    <Route path="/room" >{user?<Chat/>:<Login/>}</Route>
    <Route path="/my-profile" >{user?<Profile/>:<Login/>}</Route>
    <Route path="/profile/:id" >{user?<Profile1/>:<Login/>}</Route>
    <Route path="/events" >{user?<Event/>:<Login/>}</Route>
    <Route path="/comments/:id" >{user?<CommentBox/>:<Login/>}</Route>
    <Route path="/admin-panel" ><Admin/></Route>


  </Switch>
</UserContext.Provider>
      
 
    </div>
</Router>


   
  );
}

export default App;
