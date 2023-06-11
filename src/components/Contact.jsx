
function Contact() {

    return(
        <>
            <main className="boxmain">
                <h1>Contact Us</h1>
                <form className="contact" action="mailto:you@yourdmainhere.com" method="post" enctype="text/plain">
                    <div id="contactfirstname">
                    <label for="firstname">First Name</label>
                    <input type="text" className="form-control" id="cfirstname" placeholder="Enter First Name *" required aria-required="true"/>
                    </div>
                    <div id="contactlastname">
                    <label for="lastname">Last Name</label>
                    <input type="text" className="form-control" id="clastname" placeholder="Enter Last Name *" required aria-required="true"/>
                    </div>
                    <div id="contactemail">
                        <label for="email1">Email address</label>
                        <input type="email" className="form-control" id="cemail1" aria-describedby="emailHelp" placeholder="Enter email address *" required aria-required="true"/>    
                    </div>
                    <div id="contactsubject">
                        <label for="subject">Subject</label>
                        <input type="subject" className="form-control" id="csubject" placeholder="Enter Subject *" required aria-required="true"/>
                    </div>
                    <div id="contactmessage">
                        <label for="subject">Message</label>
                        <textarea type="text" className="form-control" id="cmessage" placeholder="Enter Message *" required aria-required="true"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" id="btn-submit">Submit</button>
                </form> 
            </main>
        </>
    )
}

export default Contact; 