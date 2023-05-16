import { useState } from "react";




function CheatSheet(){


    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
      setToggle(!toggle);
    };
// useEffect(()=>{

//     if(starpoint ){
//         return nostarpoint
//     }
//     else return starpoint
// },[])
// useEffect(()=>{

//   const handleClick() {
//     setToggle(!toggle);
//   };
// },[])






if (toggle) {
  return (
    <div>
      <button onClick={handleClick} style={{ display: toggle ? 'block' : 'none' }} class="btn btn-dark mb-5"><strong>Star Cheat Sheet</strong>
</button>

<fieldset>
  <legend>Star : Evolution</legend>
      <ul class="list-group">
 <li><div>✨Acrab : Subgiant✨</div></li>
<li><div>✨Al Salib : Subgiant✨</div></li>
<li><div>✨Algorab : Subgiant✨</div></li>
<li><div>✨Alnilam : Supergiant✨</div></li>
<li><div>✨Alnitak : Supergiant✨</div></li>
<li><div>✨Alshain : Subgiant✨</div></li>
<li><div>✨Altair : Main Sequence✨</div></li>
<li><div>✨Altais : Giant✨</div></li>
<li><div>✨Antares : Supergiant✨</div></li>
<li><div>✨Denebola : Main Sequence✨</div></li>
<li><div>✨Dschubba : Main Sequence✨</div></li>
<li><div>✨Etamin✨ : Giant✨</div></li>
<li><div>✨Gienah : Giant✨</div></li>
<li><div>✨Gorgonea Tertia : Bright Giant✨</div></li>
<li><div>✨Kochab : Giant✨</div></li>
<li><div>✨Kraz✨ : Main Sequence✨</div></li>
<li><div>✨Mintaka : Bright Giant✨</div></li>
<li><div>✨Miram : Supergiant✨</div></li>
<li><div>✨Mirphak : Subgiant✨</div></li>
<li><div>✨Pherkad : Supergiant✨</div></li>
<li><div>✨Polaris : Supergiant✨</div></li>
<li><div>✨Rastaban : Bright Giant✨</div></li>
<li><div>✨Regulus : Main Sequence</div></li>
<li><div>✨Rotanev : Giant✨</div></li>
<li><div>✨Sheliak : Giant✨</div></li>
<li><div>✨Sualocin : Giant✨</div></li>
<li><div>✨Sulafat : Giant✨</div></li>
<li><div>✨Tarazed : Bright Giant✨</div></li>
<li><div>✨Vega : Main Sequence✨</div></li>
<li><div>✨Zosma : Main Sequence✨</div></li>
      </ul>
      </fieldset>
    </div>
  )
} else {
  return <button onClick={handleClick} class="btn btn-dark mb-5">Show Star Cheat Sheet</button>
}





    



}

export default CheatSheet