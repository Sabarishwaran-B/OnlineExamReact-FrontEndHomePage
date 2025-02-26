import "./Home.css";
const HomePage = () => {
  
  return (
    <div className="Home-container">
      {/* Navbar */}
     
      
      {/* Main Content */}
      <div className="main">
      <div class="Hlogo">
                <a href="www.google.com"><span>SW</span></a>
            </div>
        <div className="b">
        <div className="text-section">
          <h1>Hello!! <span role="img" aria-label="smile">😊</span></h1>
          <p>Let's Take The Test!!</p>
          <button className="click-button" onClick={() => window.location.href = "/login"}>Click</button>
        </div>
        </div>
      </div>
      <div className="foot">
        <p>@copyright</p>
      </div>
    </div>
  );
};

export default HomePage;
