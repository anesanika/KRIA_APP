import "./Card.css";


function Card(props : any) {
  return (
    <div className="card-cont">
      <div className="card-header">
        <h1 className="card-numb">{props.number}</h1>

        <div className="card-img">
          <img src={props.card_img} alt="card1" />
        </div>
        
      </div>
      <div className="card-context">
        <div className="card-title-desc">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <a href="/">Explore</a>
        </div>
      </div>
    </div>  
  );
}

export default Card