import nebulaEnergy from "./nebenergy.png"
import usedNebulaEnergy from "./usednebenergy.png"
import { useState } from "react";
import Bubble from "./nebulae/Bubble Nebula.png"
import Carina from "./nebulae/Carina Nebula.png"
import Crab from "./nebulae/Crab Nebula.png"
import Elephant from "./nebulae/Elephant's Trunk Nebula.png"
import Eskimo from "./nebulae/Eskimo Nebula.png"
import Helix from "./nebulae/Helix Nebula.png"
import Lagoon from "./nebulae/Lagoon Nebula.png"
import Orion from "./nebulae/Orion Nebula.png"
import Ring from "./nebulae/Ring Nebula.png"
import Trifid from "./nebulae/Trifid Nebula.png"



function Nebula3(){

  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };



    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
    


const handleClick1 = () => {
    setToggle1(!toggle1);
  };
  const handleClick2 = () => {
    setToggle2(!toggle2);
  };
  const handleClick3 = () => {
    setToggle3(!toggle3);
  };
  

  const starData = [
    {
      "id": 1,
      "name": "Bubble Nebula",
      "src": Bubble
    },

    {
      "id": 2,
      "name": "Carina Nebula",
      "src": Carina
    },

    {
      "id": 3,
      "name": "Crab Nebula",
      "src": Crab
    },

    {
      "id": 4,
      "name": "Elephant's Trunk Nebula",
      "src": Elephant
    },

    {
      "id": 5,
      "name": "Eskimo Nebula",
      "src": Eskimo
    },

    {
      "id": 6,
      "name": "Helix Nebula",
      "src": Helix
    },

    {
      "id": 7,
      "name": "Lagoon Nebula",
      "src": Lagoon 
    },

    {
      "id": 8,
      "name": "Orion Nebula",
      "src": Orion
    },

    {
      "id": 9,
      "name": "Ring Nebula",
      "src": Ring
    },

    {
      "id": 10,
      "name": "Trifid Nebula",
      "src": Trifid
    },

  ]


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

</div>


</fieldset>
</div>
    )
}


export default Nebula3