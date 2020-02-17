import React from 'react';



function Hero_slider() {
  return (
    <div className="hero_slider">  
    <div className="hero_slider_wrapper">
       <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className = "container">
                <div className = "navbar-tittle" style={{margin: "20px 0px" }}>
                 <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">

                         <i class="fa fa-bars" style={{fontSize:"30px", color:"white"}}></i>
                                            
                    </button>
                    <a className="navbar-brand" href="#"><strong><b>BLU<span className = "lettercolor">E</span>ASY</b></strong></a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                         <li><a href="#home">HOME </a></li>
                         <li><a href="#services">SERVICER</a></li>
                          <li><a href="#feature">FEATURES</a></li>
                          <li><a href="#portfolio">PORTFOLIO</a></li>
                         <li><a href="#contact">CONTACT </a></li>
                    </ul>
                </div>
            </div>
        </div>
         </nav>
    </div>
    <div className="hero-text">
        <div className = "container">
            <div className="hero_text_content hidden-xs">
                <p>I'M LOOKING FOR THE UNEXPECTED</p>
                <p>I'M LOOKING FOR THINGS I'VE NEVER SEEN BEFORE </p>
            </div>
        </div>
     </div>
</div>
    
  );
}

export default Hero_slider;


