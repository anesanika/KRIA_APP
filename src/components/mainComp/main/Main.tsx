import "./Main.css";
import Secthead from "../../secComp/sectionH/Secthead";
import Carusel from "../../secComp/carusel/Carusel";
import About from "../../secComp/about/About";

function Main(){
  return (
    <main>
      <div className="content">
        <section>
          <Secthead 
          index= {"01"} 
          secType= "range of active" 
          title = "Choose your Adventure"
          desc= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non recusandae esse ex adipisci mollitia, tempore, blanditiis accusamus omnis reiciendis laudantium inventore magni fuga minus aspernatur ipsum quae incidunt placeat!"
          />
          <Carusel />
        </section>
        <section style={{marginTop: '30px'}}>
          <Secthead 
          index= {"02"} 
          secType= "Browse our Gallery" 
          title = "Browse Our Gallery"
          desc= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non recusandae esse ex adipisci mollitia, tempore, blanditiis accusamus omnis reiciendis laudantium inventore magni fuga minus aspernatur ipsum quae incidunt placeat!"
          />
          <About />
        </section>
      </div>
    </main>
  );
}


export default Main;