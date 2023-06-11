import logomain from '../images/ORK_Logo.png'
import facebook from '../images/800px-Facebook_logo_(square).png'
import instagram from '../images/Instagram_logo_2016.png'
import arrowUp from '../images/Arrowup_light.png'
 
function Home() {

    return (
        <>
            <main className="container-fluid text-center">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <img className="logomain" src={logomain} alt="orklogo" height="350px" width="350px"/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto landp-text">
                        <h1>A Refreshing Interpretation of Cantonese Cuisine</h1>
                        <br/>
                        <h2>A Davis Staple since 2012</h2>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-lg landp-btn">Menus</button>
                        <button type="button" className="btn btn-primary btn-lg landp-btn">Order Online</button>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto landp-text">
                        <a href="#promos">
                            <button type="button" className="btn  btn-primary btn-lg landp-btn">Today's Specials</button>       
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="box1 object-fit-fill rounded" id="promos">
                        <h2>Today's Specials:</h2>
                        <br/>
                        <div id="promo-element"></div>
                        <script src="./js/promo.js"></script>
                        <div>
                            <p>
                                • 2 APPETIZERS, ENTREES and DRINKS per Person •
                            </p> 
                            <p>
                                • Limit of 1 DRINK per food item purchased •
                            </p>
                            <p>
                                • NO MODIFICATIONS OR SUBSTITUTIONS •
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box2 object-fit-fill rounded">
                        <h1>
                            Open Rice Kitchen
                        </h1>
                        <br/>
                        <hr className="solid"/>
                        <br/>
                        <h2>
                            Serving the Davis Community since 2012
                        </h2>
                        <br/><br/>
                        <h3>
                            We bring a fresh interpretation of Cantonese Cuisine with Classics and Signature Dishes.
                            Open Rice Kitchen was founded by UC Davis Alumni to serve the local and Student Population with fresh and healthy Dishes that make your day.
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="box3 object-fit-fill rounded" >
                        <div className="b3header" id="location"><h2>Location</h2></div>
                        <div className="b3header" id="social"><h2>Socials</h2></div>
                        <div className="b3header" id="hour"><h2>Hours</h2></div>
                        <div id="map"> 
                            <iframe className='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5595662337255!2d-121.74097718467156!3d38.54391967962665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808529739a312065%3A0x353105b92f5a6cf0!2sOpen%20Rice%20Kitchen!5e0!3m2!1sen!2sus!4v1677098578309!5m2!1sen!2sus" loading="lazy"></iframe>
                            <br />
                            204 G Street Davis CA 95616
                        </div>
                        <div className="socials">
                            <br/><br/>
                            <a href="https://www.instagram.com/openricekitchen/">
                                <img src={instagram} alt="Instagram" width="70px" height="70px"/>
                            </a>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <a href="https://www.facebook.com/OpenRiceKitchen/">
                                <img src={facebook} alt="Facebook" width="70px" height="70px"/>
                            </a>
                        </div>
                        <div className="hours">
                            <br/>
                            Mon - Thu 11am - 10pm <br/> <br/>
                            Fri - Sat 11am - 2am <br/><br/>
                            Su 11am - 9 pm
                            <br/><br/>
                            <div id="phone"> Phone: <a href="tel:5307572328">(530) 757-2328</a></div>
                        </div>
                        <div className="arrowup">
                            <a href="#top">
                                <img src={arrowUp} alt="arrow" height="40px" width="40px"/>
                                <br/>TOP
                            </a>
                        </div>
                    </div>   
                </div>
            </main>
        </>
    )
}

export default Home;