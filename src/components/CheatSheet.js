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
      <ul class="list-group">



      <li>✨Acrab : Subgiant✨</li>
<li>✨Al Salib✨</li>
<li>✨Algorab✨</li>
<li>✨Alnilam✨</li>
<li>✨Alnitak✨</li>
<li>✨Alshain✨</li>
<li>✨Altair✨</li>
<li>✨Altais✨</li>
<li>✨Antares✨</li>
<li>✨Denebola✨</li>
<li>✨Dschubba✨</li>
<li>✨Etamin✨</li>
<li>✨Gienah✨</li>
<li>✨Gorgonea Tertia✨</li>
<li>✨Kochab✨</li>
<li>✨Kraz✨</li>
<li>✨Mintaka✨</li>
<li>✨Miram✨</li>
<li>✨Mirphak✨</li>
<li>✨Pherkad✨</li>
<li>✨Polaris✨</li>
<li>✨Rastaban✨</li>
<li>✨Regulus✨</li>
<li>✨Rotanev✨</li>
<li>✨Sheliak✨</li>
<li>✨Sualocin✨</li>
<li>✨Sulafat✨</li>
<li>✨Tarazed✨</li>
<li>✨Vega✨</li>
<li>✨Zosma✨</li>
      </ul>
    </div>
  )
} else {
  return <button onClick={handleClick} class="btn btn-dark mb-5">Show Star Cheat Sheet</button>
}





    



}

export default CheatSheet