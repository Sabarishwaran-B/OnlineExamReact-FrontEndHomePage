import { FaUser, FaEnvelope, FaLock, } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import "./Login.css";

const Signup = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <div class="logo">
                <a href="www.google.com"><span>SW</span></a>
            </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="login-form">
          <GiArchiveRegister  className="form-icon" />
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="UserName" />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <FaPhoneVolume  className="input-icon" />
            <input type="text" placeholder="Ph.no" />
          </div>
          <div className="input-group">
            <BsThreeDots className="input-icon" />
            <input type="text" placeholder="Gender" />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="New Password" />
          </div>
          <div className="input-group">
            <FaLock  className="input-icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button className="login-btn" onClick={() => window.location.href = "/login"}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
