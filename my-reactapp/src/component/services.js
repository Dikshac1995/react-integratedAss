import React from 'react';
import  coffee from "../Assets/images/coffee.png";
import  instant from "../Assets/images/instant.png";
import  frame from "../Assets/images/frame.png";
import  serious from "../Assets/images/serious.png";



function Hero_slider() {
  return (
    <section className = "services">
            <div className = "services_wrapper">
                <div className = "container">
                    <div className="service_wrapper_title ">
                         <h2 className ="service_heading">SERVICES</h2>
                    </div> 
                    <div className="row">
                        <div className = "service_item col-md-3 col-sm-6">
                            <div className="arical_image">
                                <img src={coffee} alt = "cofee"/>
                            </div>
                            <div className = "artical_title">
                                <h4>COFEE</h4>
                            </div>
                            <div className="artical_blog">
                                <p>
                                    Apple pieking sweet Brownie Jelly-o-applicake.
                                    Sweet roll liquorice bear claw Jujubes carrot
                                    cake cotton candy sweet tart brownie tiramisa 
                                    applicare Jujubes.
                                </p>
                            </div>
                        </div>
                        <div className = "service_item col-md-3 col-sm-6">
                            <div className="arical_image">
                                <img src = {instant} alt = "instant"/>
                            </div>
                            <div className = "artical_title">
                                 <h4>INSTANT</h4>
                            </div>
                            <div className="artical_blog">
                                <p>
                                    Apple pieking sweet Brownie Jelly-o-applicake.
                                    Sweet roll liquorice bear claw Jujubes carrot
                                    cake cotton candy sweet tart brownie tiramisa 
                                    applicare Jujubes.
                                </p>
                             </div>
                        </div>
                        <div className = "service_item col-md-3 col-sm-6">
                            <div className="arical_image">
                                <img src = {serious} alt="serious"/>
                            </div>
                             <div className = "artical_title">
                                <h4>SERIOUS</h4>
                            </div>
                            <div className="artical_blog">
                                <p>
                                    Apple pieking sweet Brownie Jelly-o-applicake.
                                    Sweet roll liquorice bear claw Jujubes carrot
                                    cake cotton candy sweet tart brownie tiramisa 
                                    applicare Jujubes.
                                </p>
                            </div>
                        </div>
                        <div className = "service_item col-md-3 col-sm-6">
                            <div className="arical_image">
                                <img src = {frame} alt = "frame"/>
                             </div>
                            <div className = "artical_title">
                                 <h4>FRAME</h4>
                            </div>
                            <div className="artical_blog">
                            <p>
                                Apple pieking sweet Brownie Jelly-o-applicake.
                                Sweet roll liquorice bear claw Jujubes carrot
                                cake cotton candy sweet tart brownie tiramisa 
                                applicare Jujubes.
                            </p>
                            </div> 
                        </div>
                     </div>
                 </div>
            </div>
        </section>
  );
}

export default Hero_slider;

