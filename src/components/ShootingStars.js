
import starpoint from "./smallstarpoint.png"
import nostarpoint from "./smallstarNOpoint.png"

import { useState } from "react"

function ShootingStars(){

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
  

// useEffect(()=>{

//     if(starpoint ){
//         return nostarpoint
//     }
//     else return starpoint
// },[])



    return(

<div>

  <fieldset>
  <legend><strong>Shooting Star Victory Points</strong></legend>

<div>
<img onClick={handleClick1} src={toggle1?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick2} src={toggle2?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick3} src={toggle3?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick4} src={toggle4?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick5} src={toggle5?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick6} src={toggle6?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick7} src={toggle7?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick8} src={toggle8?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick9} src={toggle9?nostarpoint:starpoint} alt="shooting star point 2"/>
<img onClick={handleClick0} src={toggle0?nostarpoint:starpoint} alt="shooting star point 2"/>
</div>
  
{/* 
    <input className="starpoint" type="checkbox" id="shootingstar" name="star1" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star12" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star13" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star14" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star15" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star16" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star17" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star18" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star19" ></input>

    <input className="starpoint" type="checkbox" id="shootingstar" name="star10" ></input> */}

</fieldset>
</div>
    )
}


export default ShootingStars

