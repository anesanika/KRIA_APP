import { useEffect, useRef, useState } from "react";
import "./Carusel.css"
import Card from "../card/Card";
import cardImg from "../../../assets/car1.png"
import cardImg1 from "../../../assets/car2.png"



function Carusel() {

  const [carusellIndex, setCaruselIndex] = useState<number>(0);
  const getIndex = useRef<any>(0)
  const [childLength, setChildLength] = useState<number>(0);

  useEffect(() =>{
    const chidresLenght = Array.from(getIndex.current.children).length;
    setChildLength(chidresLenght)

  }, [])

  const slideLeft = () =>{
    setCaruselIndex (carusellIndex  - 100)

    if (Math.abs(carusellIndex) >= (childLength - 1) * 100) {
      setCaruselIndex (carusellIndex  + 0)
    }
  }

  const slideRight = () =>{
    setCaruselIndex (carusellIndex  + 100)
    
    if (carusellIndex >= 0){    
      setCaruselIndex (carusellIndex  + 0)
    }
  }
  
  
  
  
  
  return(
    <div className="carusel-cont">
      <button onClick={() => slideRight()}>◄</button>
      <div className="main-carusel" ref={getIndex}>
        <div className="cards-cont" 
        style={{transform : `translateX( ${carusellIndex}%)`}}
        >
          <Card 
          number="01"
          title = "Camping" 
          desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusantium cumque hic in, omnis molestiae enim. Dolores voluptatum exercitationem tem"
          card_img = {cardImg}
          />
          <Card 
          number="02"
          title = "Sightseeing" 
          desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusantium cumque hic in, omnis molestiae enim. Dolores voluptatum exercitationem tem"
          card_img = {cardImg1}
          />
          <Card 
          number="03"
          title = "Hiking" 
          desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusantium cumque hic in, omnis molestiae enim. Dolores voluptatum exercitationem tem"
          card_img = {cardImg}
          />
        </div>
        <div className="cards-cont"
        style={{transform : `translateX( ${carusellIndex}%)`}}
        >
          <Card 
          number="04"
          title = "Camping" 
          desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusantium cumque hic in, omnis molestiae enim. Dolores voluptatum exercitationem tem"
          card_img = {cardImg1}
          />
          <Card 
          number="05"
          title = "Sightseeing" 
          desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusantium cumque hic in, omnis molestiae enim. Dolores voluptatum exercitationem tem"
          card_img = {cardImg}
          />
          <Card 
          number="06"
          title = "Hiking" 
          desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusantium cumque hic in, omnis molestiae enim. Dolores voluptatum exercitationem tem"
          card_img = {cardImg1}
          />
        </div>
      </div>
      
      <button onClick={() => slideLeft()}>►</button>
    </div>
  );
}


export default Carusel