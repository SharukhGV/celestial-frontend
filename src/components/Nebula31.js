import nebulaEnergy from "./nebenergy.png"
import usedNebulaEnergy from "./usednebenergy.png"
import { useState,useEffect } from "react"


function Nebula31(){


  const [toggle1a, setToggle1a] = useState(
    localStorage.getItem('toggle1a') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('toggle1a', toggle1a.toString());
  }, [toggle1a]);

  const handleClick1a = () => {
    setToggle1a(!toggle1a);
  };
// 
const [toggle2a, setToggle2a] = useState(
localStorage.getItem('toggle2a') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle2a', toggle2a.toString());
}, [toggle2a]);

const handleClick2a = () => {
setToggle2a(!toggle2a);
};

// 
const [toggle3a, setToggle3a] = useState(
localStorage.getItem('toggle3a') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle3a', toggle3a.toString());
}, [toggle3a]);

const handleClick3a = () => {
setToggle3a(!toggle3a);
};

  const handleReset = () => {
    setToggle1a(false);
    setToggle2a(false);
    setToggle3a(false);
    
  
  };

    return(

<div>

  <fieldset>
  <legend>Nebulae Energies</legend>

<select name="pets" id="pet-select">
    <option value="">--Please Pick your Nebula--</option>
    <option value="carina">Carina</option>
    <option value="crab">Crab</option>
    <option value="lagoon">Lagoon </option>
    <option value="ring">Ring</option>
    <option value="helix">Helix</option>
  <option value="bubble">Bubble</option>
    <option value="trifid">Trifid</option>
    <option value="eskimo">Eskimo</option>
      <option value="elephant">Elephant L. </option>

    <option value="orion">Orion</option>
</select>


<div>
<img onClick={handleClick1a} src={toggle1a?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2a"/>
<img onClick={handleClick2a} src={toggle2a?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2a"/>
<img onClick={handleClick3a} src={toggle3a?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2a"/>
</div>

<button className="orangeReset" onClick={handleReset}>Reset</button>

</fieldset>
</div>
    )
}


export default Nebula31