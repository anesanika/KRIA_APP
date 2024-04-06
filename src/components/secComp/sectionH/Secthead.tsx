import "./Secthead.css";

function Secthead(props : any){
  return (
    <div className="acctive-cont">
      <div className="rotText">
        <h5> <span>{props.index}</span> / {props.secType}</h5>
      </div>
      <div className="title-desc">
        <div className="title">
          <h2>{props.title}</h2>
          <div>
            <h5><span>{props.index}</span> / {props.secType}</h5>
          </div>
        </div>
        <div className="descr">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus non recusandae esse ex adipisci mollitia, 
            tempore, blanditiis accusamus omnis reiciendis laudantium inventore
            magni fuga minus aspernatur ipsum quae incidunt placeat!
          </p>
        </div>
      </div>
    </div>  
  )
}

export default Secthead;