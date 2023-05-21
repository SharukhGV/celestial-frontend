import nebulaEnergy from "./nebenergy.png"
import usedNebulaEnergy from "./usednebenergy.png"
import { useState,useEffect } from "react"

function Nebula10z(){




//     const [toggle1z, setToggle1z] = useState(true);
//     const [toggle2z, setToggle2z] = useState(true);
//     const [toggle3z, setToggle3z] = useState(true);
//     const [toggle4z, setToggle4z] = useState(true);
//     const [toggle5z, setToggle5z] = useState(true);
//     const [toggle6z, setToggle6z] = useState(true);
//     const [toggle7z, setToggle7z] = useState(true);
//     const [toggle8z, setToggle8z] = useState(true);
//     const [toggle9z, setToggle9z] = useState(true);
//     const [toggle0z, setToggle0z] = useState(true);




// const handleClick1z = () => {
//     setToggle1z(!toggle1z);
//   };
//   const handleClick2z = () => {
//     setToggle2z(!toggle2z);
//   };
//   const handleClick3z = () => {
//     setToggle3z(!toggle3z);
//   };
//   const handleClick4z = () => {
//     setToggle4z(!toggle4z);
//   };
//   const handleClick5z = () => {
//     setToggle5z(!toggle5z);
//   };
//   const handleClick6z = () => {
//     setToggle6z(!toggle6z);
//   };
//   const handleClick7z = () => {
//     setToggle7z(!toggle7z);
//   };
//   const handleClick8z = () => {
//     setToggle8z(!toggle8z);
//   };
//   const handleClick9z = () => {
//     setToggle9z(!toggle9z);
//   };
//   const handleClick0z = () => {
//     setToggle0z(!toggle0z);
//   };
  
const [toggle1z, setToggle1z] = useState(
  localStorage.getItem('toggle1z') === 'true'
);

useEffect(() => {
  localStorage.setItem('toggle1z', toggle1z.toString());
}, [toggle1z]);

const handleClick1z = () => {
  setToggle1z(!toggle1z);
};
// 
const [toggle2z, setToggle2z] = useState(
localStorage.getItem('toggle2z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle2z', toggle2z.toString());
}, [toggle2z]);

const handleClick2z = () => {
setToggle2z(!toggle2z);
};

// 
const [toggle3z, setToggle3z] = useState(
localStorage.getItem('toggle3z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle3z', toggle3z.toString());
}, [toggle3z]);

const handleClick3z = () => {
setToggle3z(!toggle3z);
};
// --------------------------------------------
const [toggle4z, setToggle4z] = useState(
localStorage.getItem('toggle4z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle4z', toggle4z.toString());
}, [toggle4z]);

const handleClick4z = () => {
setToggle4z(!toggle4z);
};
// --------------------------------------------
const [toggle5z, setToggle5z] = useState(
localStorage.getItem('toggle5z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle5z', toggle5z.toString());
}, [toggle5z]);

const handleClick5z = () => {
setToggle5z(!toggle5z);
};

// --------------------------------------------

const [toggle6z, setToggle6z] = useState(
localStorage.getItem('toggle6z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle6z', toggle6z.toString());
}, [toggle6z]);

const handleClick6z = () => {
setToggle6z(!toggle6z);
};
// --------------------------------------------
const [toggle7z, setToggle7z] = useState(
localStorage.getItem('toggle7z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle7z', toggle7z.toString());
}, [toggle7z]);

const handleClick7z = () => {
setToggle7z(!toggle7z);
};

// --------------------------------------------

const [toggle8z, setToggle8z] = useState(
localStorage.getItem('toggle8z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle8z', toggle8z.toString());
}, [toggle8z]);

const handleClick8z = () => {
setToggle8z(!toggle8z);
};
// --------------------------------------------

const [toggle9z, setToggle9z] = useState(
localStorage.getItem('toggle9z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle9z', toggle9z.toString());
}, [toggle9z]);

const handleClick9z = () => {
setToggle9z(!toggle9z);
};
// --------------------------------------------

const [toggle0z, setToggle0z] = useState(
localStorage.getItem('toggle0z') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle0z', toggle0z.toString());
}, [toggle0z]);

const handleClick0z = () => {
setToggle0z(!toggle0z);
};
// --------------------------------------------


const handleReset = () => {
  setToggle1z(false);
  setToggle2z(false);
  setToggle3z(false);
  setToggle4z(false);
  setToggle5z(false);
  setToggle6z(false);
  setToggle7z(false);
  setToggle8z(false);
  setToggle9z(false);  
  setToggle0z(false);

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
<img onClick={handleClick1z} src={toggle1z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick2z} src={toggle2z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick3z} src={toggle3z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick4z} src={toggle4z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick5z} src={toggle5z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick6z} src={toggle6z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick7z} src={toggle7z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick8z} src={toggle8z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick9z} src={toggle9z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
<img onClick={handleClick0z} src={toggle0z?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2z"/>
</div>
<button className="orangeReset" onClick={handleReset}>Reset</button>

</fieldset>
</div>
    )
}


export default Nebula10z