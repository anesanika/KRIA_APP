import "./About.css";
import Pharagrap from "../pharagrap/Pharagrap";
import aboutImage from "../../../assets/aboutImg.png"
import delteImage from "../../../assets/mid-layer.png"
import { useEffect, useRef, useState } from "react";

function About(){
  
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [isTouch, setIsTouhc] = useState<boolean>(false);
  const myRef = useRef<HTMLDivElement>(null);

  const dbArray = [
    {
      image : aboutImage,
      year : 2019,
      photogr : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, blanditiis repellat provident ',
      narrav : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ',
      title : 'Kamachatka Solitude'
    },
    {
      title : 'Sigthseeing',
      image : aboutImage,
      year : 2012,
      photogr : 'ipsum dolor sit amet consectetur adipisicing elit. Illo, blanditiis repellat provident praesentium sunt porro, reiciendis invento',
      narrav : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, blanditiis repellat provident praesentium',
    },
    {
      title : 'Camping',
      image : delteImage,
      year : 2016,
      photogr : ' ipsum dolor sit amet consectetur adipisicing elit. Illo, blanditiis repellat provident praesentium sunt porro, reiciendis ',
      narrav : ' amet consectetur adipisicing elit. Illo, blanditiis repellat provident praesentium',
    }
  ]

  useEffect(() => {
    const element = myRef.current;
    window.addEventListener("scroll", () =>{
      if (element){
        const contProps = element.getBoundingClientRect()
        if (window.scrollY + window.innerHeight - 1000 >= contProps.height + contProps.top) {
          setIsTouhc(true)
        }
        else{
          setIsTouhc(false)
        }
      }
      
    })
    
  }, [])
  
  
  return(
    <div className="about-cont">
      <div className="about-carusel" style={{flex : isTouch ? '0 0 50%' : '0 0 0%'}}>
        <img src={dbArray[Math.abs(imageIndex)].image} 
        style={{transform: `translateX(${imageIndex * 100}%)`}}
        alt="img2"
        />
        <img src={aboutImage} 
        style={{transform: `translateX(${imageIndex * 100}%)`}}
        alt="img2"
        />
        <img src={delteImage} 
        style={{transform: `translateX(${imageIndex * 100}%)`}}
        alt="img2"
        />

        <button 
        onClick={() => setImageIndex(-1)}
        className="index-div">
        </button>
        
        <button 
        onClick={() => setImageIndex(0)}
        className="index-div">
        </button>
        
        <button 
        onClick={() => setImageIndex(-2)}
        className="index-div">
        </button>
      </div>
      
      <div className="more-about" ref={myRef}>
        <div className="title-year">
          <h1>{dbArray[Math.abs(imageIndex)].title}</h1>
          <h3>{dbArray[Math.abs(imageIndex)].year}</h3>
        </div>
        <div className="phr">

          <Pharagrap 
          title="Photography"
          desc={dbArray[Math.abs(imageIndex)].photogr} />
          
          <Pharagrap 
          title="Year"
          desc={dbArray[Math.abs(imageIndex)].year} />
          
          <Pharagrap 
          title="Narrative"
          desc={dbArray[Math.abs(imageIndex)].narrav} />
          
          <button
          onClick={() => setFullScreen(true)}
          >Explore Photo</button>
        </div>
      </div>
      {fullScreen ?
      <div className="fulscren-image">
        <img src={dbArray[Math.abs(imageIndex)].image} alt="" />
        <button onClick={() => setFullScreen(false)}>X</button>
      </div>
      :
      null
      }
    </div>
  );
}

export default About