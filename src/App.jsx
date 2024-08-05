import React,{useState,useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import {auth} from './firebase';

const App = () => {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }else setUserName("");
    })
  },[])

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home name={userName}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App