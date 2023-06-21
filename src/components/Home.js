import RulesSound from "./RulesSound";

function Home(){

    const pixstyle= {
        fontSize:"12px"
    }

    return(
    <div className="homePAge">
    <h1><strong>Celestial Respiration</strong></h1>
    <div><strong>An Astronomy Card Game</strong></div>
    <p>Tracker Application and Resources</p>

    <div className="cardContact">

    <div>This game is intended to introduce the Night Sky to its players in a fun interactive way. All information garnered for this game is from the Stellarium open-source software. Star images are also from the Stellarium software. Some images used in this game are from NASA, Pixabay.com, and Wikipedia.com. None of these sources endorse this product. This game is only intended to be used as a fun interactive way to familiarize with what is in our sky, and how general celestial processes work. The Definitions of the Celestial Objects are from WordWeb Online Dictionary. Google was a pivotal resource in the making of this game</div>
    
    <p style={pixstyle}>Images sourced from pixabay, Stellarium, Wikipedia, Creative Commons, etc. and have been edited by the <a href="https://www.gimp.org" alt="GIMP site">GIMP software</a></p>
                
    </div>
    
    <p><RulesSound/></p>
    
    </div>
    
    )
    }
    
    
    export default Home;