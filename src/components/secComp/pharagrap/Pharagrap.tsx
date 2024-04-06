import "./Pharagrap.css";


function Pharagrap(props : any){
  return(
    <div className="Pharagrap">

      <h4>{props.title}:</h4>
      <p>{props.desc}</p>
    </div>
  );
}

export default Pharagrap;