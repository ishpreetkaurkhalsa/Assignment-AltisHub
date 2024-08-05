import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import InputControl from '../InputControl/InputControl';
import {auth} from '../../firebase'
import styles from './Signup.module.css';


function Signup(){
  const navigate=useNavigate();
  const [values,setValues]=useState({
    name:"",
    email:"",
    pass:"",
  })
  const [errorMsg,setErrorMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
  const handleSubmit=()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all Fields");
      return;
    }
    setErrorMsg("")
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
    .then(async (res)=>{
      setSubmitButtonDisabled(false);
      const user=res.user;
      await updateProfile(user,{
        displayName:values.name,
      })
      .catch((err)=>{
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)
      })
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>
        <InputControl label="Name" type="text" onChange={(event)=>{setValues((prev)=>({...prev,name:event.target.value}))}} placeholder="Enter your name"/>
        <InputControl label="Email" type="email" onChange={(event)=>{setValues((prev)=>({...prev,email:event.target.value}))}} placeholder="Enter your email"/>
        <InputControl label="Password" type="password" onChange={(event)=>{setValues((prev)=>({...prev,pass:event.target.value}))}} placeholder="Enter your password"/>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmit} disabled={submitButtonDisabled}>Signup</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}
export default Signup