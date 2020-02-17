import React from 'react';
import portfolio1 from "../Assets/images/portfolio1.png";
import portfolio2 from "../Assets/images/portfolio2.png";
import portfolio3 from "../Assets/images/portfolio3.png";
import portfolio4 from "../Assets/images/portfolio4.png";
import portfolio5 from "../Assets/images/portfolio5.png";
import portfolio6 from "../Assets/images/portfolio6.png";
import portfolio7 from "../Assets/images/portfolio7.png";
import portfolio8 from "../Assets/images/portfolio8.png";

function Portfolio() {
    return (
    <section class =" PORTFOLIO">
        <div className = "container">
            <div className =" portfolio_title">
                <div>
                    <h2 className = "portfolio_title_heading">PORTFOLIO</h2> 
                </div> 
                <div className = "portfolio_title_link">
                        <ul className = " portfolio1">
                            <li><a className="active" href="#all">ALL</a></li>
                            <li><a href="#panoramas">PANORAMAS</a></li>
                            <li><a href="#portraits">PORTRAIT</a></li>
                            <li><a href="#macros">MACROS</a></li>
                            <li><a href="#journals">JOURNELS</a></li>
                        </ul> 
                </div>
            </div>
        <div className = "flex-item">
        
             <div className = "flex-hover" ><img src ={portfolio1}/>
                <div className="overlay">
                   <a href="#" className="icon" title="plus_sign">
                   <i className="fa fa-plus" style={{fontSize:"36px"}}/>
                     </a>
                 </div>    
            </div>
             <div className = "flex-hover" ><img src = {portfolio2}/>
                <div className="overlay">
                    <a href="#" className="icon" title="plus_sign">
                   <i className="fa fa-plus" style = {{fontSize:"36px"}}></i>
                    </a>
                </div>    
            </div>
            <div className = "flex-hover" ><img src = {portfolio3}/>
                <div className="overlay">
                    <a href="#" className="icon" title="plus_sign">
                    <i className="fa fa-plus" style={{fontSize:"36px"}}></i>
                    </a>
                </div>    
            </div>
            <div className = "flex-hover" ><img src = {portfolio4}/>
                <div className="overlay">
                     <a href="#" className="icon" title="plus_sign">
                    <i className="fa fa-plus" style={{fontSize:"36 px"}}></i>
                    </a>
                </div>    
            </div>
        <div className = "flex-hover" ><img src = {portfolio5}/>
            <div className="overlay">
                 <a href="#" className="icon" title="plus_sign">
                   <i className="fa fa-plus" style={{fontSize:"36px"}}></i>
                </a>
            </div>    
        </div>
        <div className = "flex-hover" ><img src = {portfolio6}/>
            <div className="overlay">
                 <a href="#" className="icon" title="plus_sign">
                   <i className="fa fa-plus" style={{fontSize:"36px"}}></i>
                </a>
            </div>    
        </div>
        <div className = "flex-hover" ><img src = {portfolio7}/>
            <div className="overlay">
                 <a href="#" className="icon" title="plus_sign">
                   <i className="fa fa-plus" style={{fontSize:"36px"}}></i>
                </a>
            </div>    
        </div>
        <div className = "flex-hover" ><img src = {portfolio8}/>
            <div className="overlay">
                 <a href="#" className="icon" title="plus_sign">
                   <i className="fa fa-plus" style={{fontSize:"36px"}}></i>
                </a>
            </div>    
        </div> 
       
  </div>
</div>
</section>

);
}

export default Portfolio ;
