import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

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

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="home-container">
      <div className="contain">
        <h3 style={{marginLeft:'5px'}}>TaskRabbit</h3>
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
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      
      {/* To-Do App */}
      <div className="todo-wrapper">
        <div className="todo-box">
          <div className="todo-header">To-Do List</div>
          <div className="todo-content">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                  <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          text-align: center; /* Center text in header and buttons */
        }
        .contain {
          margin-bottom: 20px;
        }
        .todo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 50vh; /* Adjust if needed to ensure there's space around */
        }
        .todo-box {
          border-radius: 15px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          max-width: 400px;
          width: 100%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .todo-header {
          font-size: 1.5em;
          margin-bottom: 15px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.5);
          padding-bottom: 10px;
        }
        .todo-content {
          display: flex;
          flex-direction: column;
        }
        .todo-content input {
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.8);
        }
        .todo-content button {
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          margin-bottom: 10px;
        }
        .todo-content button:hover {
          background-color: #0056b3;
        }
        .todo-content ul {
          list-style-type: none;
          padding: 0;
        }
        .todo-content li {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 10px;
          border-radius: 5px;
        }
        .todo-content li button {
          background-color: #dc3545;
          padding: 5px 10px;
        }
        .todo-content li button:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
};

export default Home;
