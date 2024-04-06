import "./Navbar.css";


function Navbar(){
  
  return (
    <nav>
      <div className="content">
        <div className="navbar">
          <div className="nav-logo">
            <h1><a href="/">Gravity</a></h1>
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="/">Location</a></li>
              <li><a href="/">Itinerary</a></li>
              <li><a href="/">Schedule</a></li>
              <li><a href="/">Availability</a></li>
              <a href="/">LogIn</a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
