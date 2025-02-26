import { FaUserCircle } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { FaLock } from "react-icons/fa6";
const Login = () => {
    
  return (
    <div className="container">
      {/* Navbar */}
      <div class="logo">
                <a href="www.google.com"><span>SW</span></a>
            </div>
      
      {/* Main Content */}
      <div className="main-content">

            <div className="login-form">
        <BiLogInCircle className="form-icon" />
          <div className="input-group">
            <FaUserCircle className="input-icon" />
            <input type="text" placeholder="UserName or Email" />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-btn">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </div>
      </div>
      <div className="foot">
        <p>@copyright</p>
      </div>
    </div>
  );
};


export default Login;
