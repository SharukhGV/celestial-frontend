import nebulaEnergy from "./nebenergy.png"
import usedNebulaEnergy from "./usednebenergy.png"
import { useState,useEffect } from "react"

function Nebula1s1s(){




//     const [toggle1s, setToggle1s] = useState(true);
//     const [toggle2s, setToggle2s] = useState(true);
//     const [toggle3s, setToggle3s] = useState(true);
//     const [toggle4s, setToggle4s] = useState(true);
//     const [toggle5s, setToggle5s] = useState(true);
//     const [toggle6s, setToggle6s] = useState(true);
//     const [toggle7s, setToggle7s] = useState(true);
//     const [toggle8s, setToggle8s] = useState(true);
//     const [toggle9s, setToggle9s] = useState(true);
//     const [toggle0s, setToggle0s] = useState(true);




// const handleClick1s = () => {
//     setToggle1s(!toggle1s);
//   };
//   const handleClick2s = () => {
//     setToggle2s(!toggle2s);
//   };
//   const handleClick3s = () => {
//     setToggle3s(!toggle3s);
//   };
//   const handleClick4s = () => {
//     setToggle4s(!toggle4s);
//   };
//   const handleClick5s = () => {
//     setToggle5s(!toggle5s);
//   };
//   const handleClick6s = () => {
//     setToggle6s(!toggle6s);
//   };
//   const handleClick7s = () => {
//     setToggle7s(!toggle7s);
//   };
//   const handleClick8s = () => {
//     setToggle8s(!toggle8s);
//   };
//   const handleClick9s = () => {
//     setToggle9s(!toggle9s);
//   };
//   const handleClick0s = () => {
//     setToggle0s(!toggle0s);
//   };
  
const [toggle1s, setToggle1s] = useState(
  localStorage.getItem('toggle1s') === 'true'
);

useEffect(() => {
  localStorage.setItem('toggle1s', toggle1s.toString());
}, [toggle1s]);

const handleClick1s = () => {
  setToggle1s(!toggle1s);
};
// 
const [toggle2s, setToggle2s] = useState(
localStorage.getItem('toggle2s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle2s', toggle2s.toString());
}, [toggle2s]);

const handleClick2s = () => {
setToggle2s(!toggle2s);
};

// 
const [toggle3s, setToggle3s] = useState(
localStorage.getItem('toggle3s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle3s', toggle3s.toString());
}, [toggle3s]);

const handleClick3s = () => {
setToggle3s(!toggle3s);
};
// --------------------------------------------
const [toggle4s, setToggle4s] = useState(
localStorage.getItem('toggle4s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle4s', toggle4s.toString());
}, [toggle4s]);

const handleClick4s = () => {
setToggle4s(!toggle4s);
};
// --------------------------------------------
const [toggle5s, setToggle5s] = useState(
localStorage.getItem('toggle5s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle5s', toggle5s.toString());
}, [toggle5s]);

const handleClick5s = () => {
setToggle5s(!toggle5s);
};

// --------------------------------------------

const [toggle6s, setToggle6s] = useState(
localStorage.getItem('toggle6s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle6s', toggle6s.toString());
}, [toggle6s]);

const handleClick6s = () => {
setToggle6s(!toggle6s);
};
// --------------------------------------------
const [toggle7s, setToggle7s] = useState(
localStorage.getItem('toggle7s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle7s', toggle7s.toString());
}, [toggle7s]);

const handleClick7s = () => {
setToggle7s(!toggle7s);
};

// --------------------------------------------

const [toggle8s, setToggle8s] = useState(
localStorage.getItem('toggle8s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle8s', toggle8s.toString());
}, [toggle8s]);

const handleClick8s = () => {
setToggle8s(!toggle8s);
};
// --------------------------------------------

const [toggle9s, setToggle9s] = useState(
localStorage.getItem('toggle9s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle9s', toggle9s.toString());
}, [toggle9s]);

const handleClick9s = () => {
setToggle9s(!toggle9s);
};
// --------------------------------------------

const [toggle0s, setToggle0s] = useState(
localStorage.getItem('toggle0s') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle0s', toggle0s.toString());
}, [toggle0s]);

const handleClick0s = () => {
setToggle0s(!toggle0s);
};
// --------------------------------------------


const handleReset = () => {
  setToggle1s(false);
  setToggle2s(false);
  setToggle3s(false);
  setToggle4s(false);
  setToggle5s(false);
  setToggle6s(false);
  setToggle7s(false);
  setToggle8s(false);
  setToggle9s(false);  
  setToggle0s(false);

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
<img onClick={handleClick1s} src={toggle1s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick2s} src={toggle2s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick3s} src={toggle3s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick4s} src={toggle4s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick5s} src={toggle5s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick6s} src={toggle6s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick7s} src={toggle7s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick8s} src={toggle8s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick9s} src={toggle9s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
<img onClick={handleClick0s} src={toggle0s?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2s"/>
</div>
<button className="orangeReset" onClick={handleReset}>Reset</button>

</fieldset>
</div>
    )
}


export default Nebula1s1s