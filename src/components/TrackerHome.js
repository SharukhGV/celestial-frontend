// import { useState, useEffect } from 'react';
// import NebulaKID from './Nebula10';
import Nebula10 from './Nebula10';
import ShootingStars from './ShootingStars';
import CheatSheet from './CheatSheet';
function TrackerHome(){


//     const [mode, setMode] = useState(true);

//     useEffect(()=>{
// if()
// }

//     },[mode])
  
  return(
<>
<strong className='warningwar'>W A R N I N G :</strong>
<div className='warningnav' ><strong> Do not Navigate away from this page while keeping track of Victory Points because it will reload and reset the counters</strong></div>
<div><ShootingStars/></div>
<div><Nebula10/></div>
<div><Nebula10/></div>
<div><Nebula10/></div>


<div className="HRDiagram">
<p><a href="https://commons.wikimedia.org/wiki/File:HR-diag-instability-strip.svg">Rursus</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons</p>
<img className="hrd" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/HR-diag-instability-strip.svg" alt="Hertzsprung-Russel Diagram"></img>

<div><img className="hrd" src={require("./colorindex.png")} alt="Color Index Diagram, info taken from ISBN 0-521-34787-4, Diagram From Wikipedia Commons, the url is https://en.wikipedia.org/wiki/Color_index"></img></div>

</div>

<CheatSheet/>

</>
  )

  
  
  }
  export default TrackerHome