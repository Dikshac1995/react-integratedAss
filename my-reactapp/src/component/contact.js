import React from 'react';

function Contact() {
    return (
        <section className="contact">
            <div className="contact_wrapper container">
                <div className="contact_title">
                    <h2 className = "contact_title_heading ">CONTACT</h2>
                         <div className = " row">
                         <div className="col-md-6">
                           <label >FullName:</label>
                           <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-6 hidden-sm hidden-xs">
                               <p>Bear claw marzipan bear claw applicake .
                                    I love muffines lemon drps gammi bears
                                    sesame snaps.I love underwere.com souffle
                                    cotton candy dessert candy ice-creame</p> 
                             </div>
                         </div>
                        <div className="row">
                            <div className="col-md-6">
                                 <label>Email:</label>
                                 <input type="email" className="form-control"/>
                            </div>
                            <div className="col-md-6  hidden-sm hidden-xs">
                                <address>linda Newman<br/>
                                        w235 state rood 123<br/>
                                        mondovi west 678365554677<br/>
                                        (712)9876987 
                                </address>
                            </div>
                        </div>
                            <div className="row">
                                    <div className="col-md-12">
                                    <label >Message:</label>
                                    <textarea className="form-control" rows="5"></textarea>
                                   </div>
                            </div>

                            <div className="row">
                                    <div className="col-md-4">
                                        <div className = "message_button" > <button type="button" className="btn btn-block ">MESSAGE</button></div>
                                    </div>
                             </div>
                        </div>
                     </div>  
                </section>
       
    )
}

export default Contact;
