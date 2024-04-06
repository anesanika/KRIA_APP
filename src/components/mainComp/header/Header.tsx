import { useEffect, useState } from "react";
import "./Header.css";
import img1 from "../../../assets/back-layer.png";
import img2 from "../../../assets/mid-layer.png";
import img3 from "../../../assets/first-layer.png";



function Header(){

  const [scrollVal, setScrollVal] = useState<any>(0);

  
  useEffect(() =>{
    const handleScroll = () => {    
      setScrollVal(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
  
  return (
    <header>
      <div className="bg-images">
        <img src={img1} className="bg-layer"  alt="bg" />
        <img src={img2} className="mid-layer"
        style={{transform: `translateY(${scrollVal / 2}px)`}}
        alt="mid"
        />
        <img src={img3} className="front-layer"
        alt="mid" 
        />
      </div>
      <div className="headre-context" 
      style={{transform:`translateY(${scrollVal / 2.6}px)`}}
      >
        <div className="content">
          <div>
            <h1>KRAI*</h1>
          </div>
          <div>
            <p>Join us for a week of hiking, team-bonding and digital detoxing. This month, one-time only in Kamchatka.</p>
            <a href="/">Adventure  ›</a>
          </div>
        </div>
      </div>
        
    </header>
  )
}

export default Header;