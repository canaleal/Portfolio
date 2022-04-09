import React  from 'react'
import { Outlet, Link } from "react-router-dom";
import './styles/style.css';

function App() {
  return (

    <div>




      <nav className="nav">
        <Link to="/" className="nav-item">
          <div className="nav-link logo">
            <i className="fa fa-circle fa-2x" aria-hidden="true"></i>
            <span className="link-text">Canales</span>
          </div>
        </Link>

        <Link to="/about" className="nav-item">
          <div className="nav-link">
            <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
            <span className="link-text">About</span>
          </div>
        </Link>


        <Link to="/projects" className="nav-item">
          <div className="nav-link">
            <i className="fa fa-code fa-2x" aria-hidden="true"></i>
            <span className="link-text">Projects</span>
          </div>
        </Link>


        <Link to="/gallery" className="nav-item">
          <div className="nav-link">
            <i className="fa fa-paint-brush fa-2x" aria-hidden="true"></i>
            <span className="link-text">Gallery</span>
          </div>
        </Link>

        {/* <Link to="/logos" className="nav-item">
          <div className="nav-link">
            <i className="fa fa-car fa-2x" aria-hidden="true"></i>
            <span className="link-text">Logo</span>
          </div>
        </Link> */}

     

        <a href="https://github.com/canaleal" target="_blank" className="nav-item">
          <div className="nav-link">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            <span className="link-text">Github</span>
          </div>
        </a>
        <a href='https://bitbucket.org/Canaleal/' target="_blank" className="nav-item">
          <div className="nav-link">
            <i className="fa fa-bitbucket fa-2x" aria-hidden="true"></i>
            <span className="link-text">Bitbucket</span>
          </div>
        </a>

        <a href='https://www.linkedin.com/in/alex-canales' target="_blank" className="nav-item">
          <div className="nav-link">
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            <span className="link-text">LinkedIn</span>
          </div>
        </a>



      
      </nav>
      


      <Outlet />
    </div>
  );
}

export default App;
