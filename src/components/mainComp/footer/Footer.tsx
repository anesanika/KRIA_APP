import "./Footer.css";

function Footer (){
  return(
    <footer>
      <div className="content">
        <div className="footerContent">
          <div className="created-by">
            <h3>© Anesa's Studio 2024</h3>
          </div>
          <div className="footer-link">
            <a href="/">📸</a>
            <a href="/">✉️</a>
            <a href="/">🐦</a>
          </div>
          <div className="footer-form">
            <form action="post">
              <input type="email" placeholder="Join Our Mailing List" name="gm" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer