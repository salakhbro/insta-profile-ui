import React from "react";
import Instagram from '../../assets/img/instgaram.png'
import "./Signup.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* LEFT SIDE */}
      <div className="left">
        <img src={Instagram} alt="Instagram" />

        <h1>
          See everyday moments from your <br />
          <span>close friends.</span>
        </h1>

        <div className="cards">
          <img src="https://picsum.photos/200/250" className="card c1" />
          <img src="https://picsum.photos/210/260" className="card c2" />
          <img src="https://picsum.photos/220/270" className="card c3" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="form">
          <h3>Log into Instagram</h3>

          <input type="text" placeholder="Mobile number, username or email" />
          <input type="password" placeholder="Password" />

          <button className="login"><Link className="logins" to="/">Log in</Link></button>

          <p className="forgot">Forgot password?</p>

          <button className="facebook">Log in with Facebook</button>

          <button className="signup">Create new account</button>

          <p className="meta">© Meta</p>
        </div>
      </div>
    </div>
  );
}

export default App;