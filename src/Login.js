
import "./Login.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    // useEffect(() => {
    //     async function fetchData() {
    //       const response = await fetch('http://localhost:20907/api/Login/Login1');
    //       const data = await response.json();
    //       console.log(data);
    //     }
    //     fetchData();
    //   }, []);
  const onButtonClick = () => {
    
   
    //console.log("onButtonClick");
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
  }
    return (
    <div className="form">
      <div id="mainContainer">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="blur-container">
          <div className="heading1">
            
            <input type="text" id="email" placeholder="Enter Email" />
          </div>
          <div className="heading1">
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
              

              <button className="inputButton btn btn-success" type="button">
                <Link className="link" to="/userlisting">Login</Link>
              </button>
          {/* <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"}
          /> */}
          <div className="forgot-Password">
            <p>
              Forgot your password. Contact Admin <a href="">Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
