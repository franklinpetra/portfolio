import React from 'react';
import './App.css';
import "./assets/css/styles.css";
import "./assets/img/header-bg.jpg";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Purpose from "./components/Purpose";
import Team from "./components/Team";
import Fun from "./components/Fun";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";


// import Lattice from "./components/Lattice.html";

function App() {
    return (
    <div className="App">
        <header className="masthead">
            <div className="containerH">
                <div className="masthead-heading">Welcome To Petra's Wall</div><br></br>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger mr-4 button-wiggle" styles={{margin:"0% 0% 0% 0%", borderRadius:"3px"}}  href="#services">Mission</a>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger mr-4 button-wiggle1" href="#services">Sites</a>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger button-wiggle2" href="#services">Circumnavigate</a>            </div>
        </header>
        <Nav/>
     
        <Purpose/>
        <Portfolio/>
        <About/>
        <Fun/>
        <Team/>
        <Contact/>
        <Footer/>

        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/AlanAI.jpg" alt="Alan AI logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>

    
        
    </div>
  );
}

export default App;