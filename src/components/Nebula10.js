import nebulaEnergy from "./nebenergy.png"
import usedNebulaEnergy from "./usednebenergy.png"
import { useState } from "react";

function Nebula10(){




    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
    const [toggle4, setToggle4] = useState(true);
    const [toggle5, setToggle5] = useState(true);
    const [toggle6, setToggle6] = useState(true);
    const [toggle7, setToggle7] = useState(true);
    const [toggle8, setToggle8] = useState(true);
    const [toggle9, setToggle9] = useState(true);
    const [toggle0, setToggle0] = useState(true);




const handleClick1 = () => {
    setToggle1(!toggle1);
  };
  const handleClick2 = () => {
    setToggle2(!toggle2);
  };
  const handleClick3 = () => {
    setToggle3(!toggle3);
  };
  const handleClick4 = () => {
    setToggle4(!toggle4);
  };
  const handleClick5 = () => {
    setToggle5(!toggle5);
  };
  const handleClick6 = () => {
    setToggle6(!toggle6);
  };
  const handleClick7 = () => {
    setToggle7(!toggle7);
  };
  const handleClick8 = () => {
    setToggle8(!toggle8);
  };
  const handleClick9 = () => {
    setToggle9(!toggle9);
  };
  const handleClick0 = () => {
    setToggle0(!toggle0);
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
<img onClick={handleClick1} src={toggle1?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick2} src={toggle2?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick3} src={toggle3?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick4} src={toggle4?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick5} src={toggle5?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick6} src={toggle6?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick7} src={toggle7?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick8} src={toggle8?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick9} src={toggle9?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
<img onClick={handleClick0} src={toggle0?nebulaEnergy:usedNebulaEnergy} alt="shooting star point 2"/>
</div>

</fieldset>
</div>
    )
}


export default Nebula10