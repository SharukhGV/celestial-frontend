import nebulaEnergy from "./nebenergy.png"
import usedNebulaEnergy from "./usednebenergy.png"
import { useState,useEffect } from "react"

function Nebula1w2w(){




//     const [toggle1w, setToggle1w] = useState(true);
//     const [toggle2w, setToggle2w] = useState(true);
//     const [toggle3w, setToggle3w] = useState(true);
//     const [toggle4w, setToggle4w] = useState(true);
//     const [toggle5w, setToggle5w] = useState(true);
//     const [toggle6w, setToggle6w] = useState(true);
//     const [toggle7w, setToggle7w] = useState(true);
//     const [toggle8w, setToggle8w] = useState(true);
//     const [toggle9w, setToggle9w] = useState(true);
//     const [toggle0w, setToggle0w] = useState(true);




// const handleClick1w = () => {
//     setToggle1w(!toggle1w);
//   };
//   const handleClick2w = () => {
//     setToggle2w(!toggle2w);
//   };
//   const handleClick3w = () => {
//     setToggle3w(!toggle3w);
//   };
//   const handleClick4w = () => {
//     setToggle4w(!toggle4w);
//   };
//   const handleClick5w = () => {
//     setToggle5w(!toggle5w);
//   };
//   const handleClick6w = () => {
//     setToggle6w(!toggle6w);
//   };
//   const handleClick7w = () => {
//     setToggle7w(!toggle7w);
//   };
//   const handleClick8w = () => {
//     setToggle8w(!toggle8w);
//   };
//   const handleClick9w = () => {
//     setToggle9w(!toggle9w);
//   };
//   const handleClick0w = () => {
//     setToggle0w(!toggle0w);
//   };
  
const [toggle1w, setToggle1w] = useState(
  localStorage.getItem('toggle1w') === 'true'
);

useEffect(() => {
  localStorage.setItem('toggle1w', toggle1w.toString());
}, [toggle1w]);

const handleClick1w = () => {
  setToggle1w(!toggle1w);
};
// 
const [toggle2w, setToggle2w] = useState(
localStorage.getItem('toggle2w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle2w', toggle2w.toString());
}, [toggle2w]);

const handleClick2w = () => {
setToggle2w(!toggle2w);
};

// 
const [toggle3w, setToggle3w] = useState(
localStorage.getItem('toggle3w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle3w', toggle3w.toString());
}, [toggle3w]);

const handleClick3w = () => {
setToggle3w(!toggle3w);
};
// --------------------------------------------
const [toggle4w, setToggle4w] = useState(
localStorage.getItem('toggle4w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle4w', toggle4w.toString());
}, [toggle4w]);

const handleClick4w = () => {
setToggle4w(!toggle4w);
};
// --------------------------------------------
const [toggle5w, setToggle5w] = useState(
localStorage.getItem('toggle5w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle5w', toggle5w.toString());
}, [toggle5w]);

const handleClick5w = () => {
setToggle5w(!toggle5w);
};

// --------------------------------------------

const [toggle6w, setToggle6w] = useState(
localStorage.getItem('toggle6w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle6w', toggle6w.toString());
}, [toggle6w]);

const handleClick6w = () => {
setToggle6w(!toggle6w);
};
// --------------------------------------------
const [toggle7w, setToggle7w] = useState(
localStorage.getItem('toggle7w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle7w', toggle7w.toString());
}, [toggle7w]);

const handleClick7w = () => {
setToggle7w(!toggle7w);
};

// --------------------------------------------

const [toggle8w, setToggle8w] = useState(
localStorage.getItem('toggle8w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle8w', toggle8w.toString());
}, [toggle8w]);

const handleClick8w = () => {
setToggle8w(!toggle8w);
};
// --------------------------------------------

const [toggle9w, setToggle9w] = useState(
localStorage.getItem('toggle9w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle9w', toggle9w.toString());
}, [toggle9w]);

const handleClick9w = () => {
setToggle9w(!toggle9w);
};
// --------------------------------------------

const [toggle0w, setToggle0w] = useState(
localStorage.getItem('toggle0w') === 'true'
);

useEffect(() => {
localStorage.setItem('toggle0w', toggle0w.toString());
}, [toggle0w]);

const handleClick0w = () => {
setToggle0w(!toggle0w);
};
// --------------------------------------------


const handleReset = () => {
  setToggle1w(false);
  setToggle2w(false);
  setToggle3w(false);
  setToggle4w(false);
  setToggle5w(false);
  setToggle6w(false);
  setToggle7w(false);
  setToggle8w(false);
  setToggle9w(false);  
  setToggle0w(false);

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
<img onClick={handleClick1w} src={toggle1w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick2w} src={toggle2w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick3w} src={toggle3w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick4w} src={toggle4w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick5w} src={toggle5w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick6w} src={toggle6w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick7w} src={toggle7w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick8w} src={toggle8w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick9w} src={toggle9w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
<img onClick={handleClick0w} src={toggle0w?usedNebulaEnergy:nebulaEnergy} alt="shooting star point 2w"/>
</div>
<button className="orangeReset" onClick={handleReset}>Reset</button>

</fieldset>
</div>
    )
}


export default Nebula1w2w