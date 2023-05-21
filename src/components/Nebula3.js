import nebulaEnergy from "./nebenergy.png"
import usedNebulaEnergy from "./usednebenergy.png"
import { useState,useEffect } from "react"
// import Bubble from "./nebulae/Bubble Nebula.png"
// import Carina from "./nebulae/Carina Nebula.png"
// import Crab from "./nebulae/Crab Nebula.png"
// import Elephant from "./nebulae/Elephant's Trunk Nebula.png"
// import Eskimo from "./nebulae/Eskimo Nebula.png"
// import Helix from "./nebulae/Helix Nebula.png"
// import Lagoon from "./nebulae/Lagoon Nebula.png"
// import Orion from "./nebulae/Orion Nebula.png"
// import Ring from "./nebulae/Ring Nebula.png"
// import Trifid from "./nebulae/Trifid Nebula.png"



function Nebula3(){

  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };

  const [toggle1yc, setToggle1yc] = useState(
    localStorage.getItem('toggle1yc') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('toggle1yc', toggle1yc.toString());
  }, [toggle1yc]);

  const handleClick1yc = () => {
    setToggle1yc(!toggle1yc);
  };
// 
const [toggle2yc, setToggle2yc] = useState(
localStorage.getItem('toggle2yc') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle2yc', toggle2yc.toString());
}, [toggle2yc]);

const handleClick2yc = () => {
setToggle2yc(!toggle2yc);
};

// 
const [toggle3yc, setToggle3yc] = useState(
localStorage.getItem('toggle3yc') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle3yc', toggle3yc.toString());
}, [toggle3yc]);

const handleClick3yc = () => {
setToggle3yc(!toggle3yc);
};
// --------------------------------------------
// const [toggle4, setToggle4] = useState(
// localStorage.getItem('toggle4') === 'true'
// );

// useEffect(() => {
// localStorage.setItem('toggle4', toggle4.toString());
// }, [toggle4]);

// const handleClick4 = () => {
// setToggle4(!toggle4);
// };
// // --------------------------------------------
// const [toggle5, setToggle5] = useState(
//   localStorage.getItem('toggle5') === 'true'
// );

// useEffect(() => {
//   localStorage.setItem('toggle5', toggle5.toString());
// }, [toggle5]);

// const handleClick5 = () => {
//   setToggle5(!toggle5);
// };

// // --------------------------------------------

// const [toggle6, setToggle6] = useState(
//   localStorage.getItem('toggle6') === 'true'
// );

// useEffect(() => {
//   localStorage.setItem('toggle6', toggle6.toString());
// }, [toggle6]);

// const handleClick6 = () => {
//   setToggle6(!toggle6);
// };
// // --------------------------------------------
// const [toggle7, setToggle7] = useState(
//   localStorage.getItem('toggle7') === 'true'
// );

// useEffect(() => {
//   localStorage.setItem('toggle7', toggle7.toString());
// }, [toggle7]);

// const handleClick7 = () => {
//   setToggle7(!toggle7);
// };

// // --------------------------------------------

// const [toggle8, setToggle8] = useState(
//   localStorage.getItem('toggle8') === 'true'
// );

// useEffect(() => {
//   localStorage.setItem('toggle8', toggle8.toString());
// }, [toggle8]);

// const handleClick8 = () => {
//   setToggle8(!toggle8);
// };
// // --------------------------------------------

// const [toggle9, setToggle9] = useState(
//   localStorage.getItem('toggle9') === 'true'
// );

// useEffect(() => {
//   localStorage.setItem('toggle9', toggle9.toString());
// }, [toggle9]);

// const handleClick9 = () => {
//   setToggle9(!toggle9);
// };
// // --------------------------------------------

// const [toggle0, setToggle0] = useState(
//   localStorage.getItem('toggle0') === 'true'
// );

// useEffect(() => {
//   localStorage.setItem('toggle0', toggle0.toString());
// }, [toggle0]);

// const handleClick0 = () => {
//   setToggle0(!toggle0);
// };
// --------------------------------------------



//     const [toggle1yc, setToggle1yc] = useState(true);
//     const [toggle2yc, setToggle2yc] = useState(true);
//     const [toggle3yc, setToggle3yc] = useState(true);
    


// const handleClick1yc = () => {
//     setToggle1yc(!toggle1yc);
//   };
//   const handleClick2yc = () => {
//     setToggle2yc(!toggle2yc);
//   };
//   const handleClick3yc = () => {
//     setToggle3yc(!toggle3yc);
//   };
  

  // const nebulaData = [
  //   {
  //     "id": 1yc,
  //     "name": "Bubble Nebula",
  //     "src": Bubble
  //   },

  //   {
  //     "id": 2yc,
  //     "name": "Carina Nebula",
  //     "src": Carina
  //   },

  //   {
  //     "id": 3yc,
  //     "name": "Crab Nebula",
  //     "src": Crab
  //   },

  //   {
  //     "id": 4,
  //     "name": "Elephant's Trunk Nebula",
  //     "src": Elephant
  //   },

  //   {
  //     "id": 5,
  //     "name": "Eskimo Nebula",
  //     "src": Eskimo
  //   },

  //   {
  //     "id": 6,
  //     "name": "Helix Nebula",
  //     "src": Helix
  //   },

  //   {
  //     "id": 7,
  //     "name": "Lagoon Nebula",
  //     "src": Lagoon 
  //   },

  //   {
  //     "id": 8,
  //     "name": "Orion Nebula",
  //     "src": Orion
  //   },

  //   {
  //     "id": 9,
  //     "name": "Ring Nebula",
  //     "src": Ring
  //   },

  //   {
  //     "id": 1yc0,
  //     "name": "Trifid Nebula",
  //     "src": Trifid
  //   },

  // ]

  const handleReset = () => {
    setToggle1yc(false);
    setToggle2yc(false);
    setToggle3yc(false);
    
  
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
<img onClick={handleClick1yc} src={toggle1yc?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2yc"/>
<img onClick={handleClick2yc} src={toggle2yc?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2yc"/>
<img onClick={handleClick3yc} src={toggle3yc?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2yc"/>
</div>

<button className="orangeReset" onClick={handleReset}>Reset</button>

</fieldset>
</div>
    )
}


export default Nebula3