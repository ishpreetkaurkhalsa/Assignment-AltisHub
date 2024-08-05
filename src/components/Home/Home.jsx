import { getAuth,signOut } from "firebase/auth"
import { Link } from "react-router-dom"

const Home = (props) => {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign out successful
        console.log("Signed out successfully!");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };
  return (
    <div>
      <div className="contain">
      
      <img src="logo.svg"/>
        <span className="incontain">
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