import { useState } from 'react';
// import NebulaKID from './Nebula10';
import Nebula10 from './Nebula10';
import Nebula12 from './Nebula12';
import Nebula11 from './Nebula11';
import ShootingStars from './ShootingStars';
import CheatSheet from './CheatSheet';
import Nebula3 from "./Nebula3"
import Nebula31 from './Nebula31';
import Nebula32 from './Nebula32';
function TrackerHome(){

  const [togglemode, setTogglemode] = useState(false);

  const handleCtrck = () => {
    setTogglemode(!togglemode);
  };

  

if (togglemode) {
  return (
    <div>
      <button className="buttonCheat" onClick={handleCtrck} style={{ display: togglemode ? 'block' : 'none' }} >Advanced Mode
</button>


<p><strong className='warningwar'> T R A C K E R </strong></p>
<div className='warningnav' ><strong> Keep track of Shooting Star Victory Points and Nebulae Energies. Play Advanced mode or Kids mode. Kids mode uses only 3 Nebulae Energies while Advanced mode implements all features of the game.</strong></div>
<div><ShootingStars/></div>



<div><Nebula10/></div>
<div><Nebula12/></div>
<div><Nebula11/></div>


<div className="HRDiagram">
<p><a href="https://commons.wikimedia.org/wiki/File:HR-diag-instability-strip.svg">Rursus</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons</p>
<img className="hrd" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/HR-diag-instability-strip.svg" alt="Hertzsprung-Russel Diagram"></img>

<div><img className="hrd" src={require("./colorindex.png")} alt="Color Index Diagram, info taken from ISBN 0-521-34787-4, Diagram From Wikipedia Commons, the url is https://en.wikipedia.org/wiki/Color_index"></img></div>

</div>

<CheatSheet/>
</div>
  )}
else {
  return ( 
  <div>
  
  <button className="buttonCheat" onClick={handleCtrck}>Nebula Kids-Easy Mode</button>


  <p><strong className='warningwar'> T R A C K E R </strong></p>
<div className='warningnav' ><strong>Keep track of Shooting Star Victory Points and Nebulae Energies. Play Advanced mode or Kids mode. Kids mode uses only 3 Nebulae Energies while Advanced mode implements all features of the game.</strong></div>
<div><ShootingStars/></div>



<div><Nebula3/></div>
<div><Nebula31/></div>
<div><Nebula32/></div>


</div>



  )

}
  

  
  
  }
  export default TrackerHome