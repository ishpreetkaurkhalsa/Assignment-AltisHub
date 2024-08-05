import React from 'react'
import {getAuth,signOut} from 'firebase/auth'
import {Link} from 'react-router-dom'

const Home = (props) => {
    const handleSignOut=()=>{
        const auth=getAuth();
        signOut(auth)
        .then(()=>{
            console.log("Signed Out!")
        })
        .catch((error)=>{
            console.log("error")
        })
    }
  return (
    <div>
        <div className='contain'>
            <span className='incontain'>
                <button>
                    <Link to="/login">Login</Link>
                </button>
                <button>
                    <Link to="/signup">Signup</Link>
                </button>
                <button onClick={handleSignOut}>
                    Log out
                </button>
            </span>
        </div>
        <h2>{props.name?`Welcome - ${props.name}`:"Login please"}</h2>
    </div>
  )
}

export default Home