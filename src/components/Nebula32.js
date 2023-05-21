import nebulaEnergy from "./nebenergy.png"
import usedNebulaEnergy from "./usednebenergy.png"
import { useState,useEffect } from "react"


function Nebula32(){

  const [toggle1b, setToggle1b] = useState(
    localStorage.getItem('toggle1b') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('toggle1b', toggle1b.toString());
  }, [toggle1b]);

  const handleClick1b = () => {
    setToggle1b(!toggle1b);
  };
// 
const [toggle2b, setToggle2b] = useState(
localStorage.getItem('toggle2b') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle2b', toggle2b.toString());
}, [toggle2b]);

const handleClick2b = () => {
setToggle2b(!toggle2b);
};

// 
const [toggle3b, setToggle3b] = useState(
localStorage.getItem('toggle3b') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle3b', toggle3b.toString());
}, [toggle3b]);

const handleClick3b = () => {
setToggle3b(!toggle3b);
};

  const handleReset = () => {
    setToggle1b(false);
    setToggle2b(false);
    setToggle3b(false);
    
  
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
<img onClick={handleClick1b} src={toggle1b?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2b"/>
<img onClick={handleClick2b} src={toggle2b?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2b"/>
<img onClick={handleClick3b} src={toggle3b?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2b"/>
</div>

<button className="orangeReset" onClick={handleReset}>Reset</button>

</fieldset>
</div>
    )
}


export default Nebula32