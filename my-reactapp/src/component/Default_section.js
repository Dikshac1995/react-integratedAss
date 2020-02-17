import React from 'react';
import footer_video from "../Assets/images/footer_video.png";


function Default_section() {
    return (
    <section class="Default_section">
     <div className="default_section_wrapper">
         <div className = "container">
            <div className="row">
                <div className="default_section_bolg col-md-6">
                    <div className="defalut_blog_title  ">
                        <h2 className = "default_blog_title_heading">JUST DEFAULT SECTION</h2>
                    </div>
                     <div className="default_section_blog_artical">
                        <p>
                            Bear claw marzipan bear claw applicake .
                            I love muffines lemon drps gammi bears
                            sesame snaps.I love underwere.com souffle
                            cotton candy dessert candy ice-creame. 
                            water gummies  cheesecake Brownie 
                        </p>
                        <p>
                            I love muffines lemon drps gammi bears
                            sesame snaps.I love underwere.com souffle
                            cotton candy dessert candy ice-creame. 
                        </p>
                    </div>
                    <div className="default_section_button">
                        <button id = "visit_us" >VISIT NEXT</button>
                    </div>
                    </div>
                        <div className="Default_section_media col-md-6 image_resopnsive">
                            <img src = {footer_video}  alt = "footer_video" />
                        </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Default_section;
