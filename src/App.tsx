import "./App.css";
import portrait from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <div id="root" className="main">
      <div className="card">
        <img src={portrait} alt="Jessica Randall" />
        <div className="info">
          <h1>Jessica Randall</h1>
          <span>London, United Kingdom</span>
        </div>
        <p>"Front-end developer and avid reader."</p>

        <div className="links">
          <a href="https://github.com/">GitHub</a>
          <a href="https://www.frontendmentor.io/">Frontend Mentor</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <a href="https://www.x.com">X</a>
          <a href="https://www.instagram.com/">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default App;
