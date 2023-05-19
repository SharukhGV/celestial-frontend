import { useState } from "react";




function CheatSheet(){


    const [toggle, setToggle] = useState(false);

    const handleCtrck = () => {
      setToggle(!toggle);
    };
// useEffect(()=>{

//     if(starpoint ){
//         return nostarpoint
//     }
//     else return starpoint
// },[])
// useEffect(()=>{

//   const handleCtrck() {
//     setToggle(!toggle);
//   };
// },[])






if (toggle) {
  return (
    <div>
      <button class="buttonCheat" onClick={handleCtrck} style={{ display: toggle ? 'block' : 'none' }} >Star Cheat Sheet
</button>

      <table class="trst-group">
      <thead>
        <tr>
            <th>Name</th>
            <th>Evolution Phase</th>
        </tr>
     
    </thead>
      <tbody>

 <tr><td>✨Acrab</td>  <td>Subgiant✨</td></tr>
<tr><td>✨Al Satrb</td> <td>Subgiant✨</td></tr>
<tr><td>✨Algorab</td>  <td>Subgiant✨</td></tr>
<tr><td>✨Alnilam</td>  <td>Supergiant✨</td></tr>
<tr><td>✨Alnitak</td>  <td>Supergiant✨</td></tr>
<tr><td>✨Alshain</td>  <td>Subgiant✨</td></tr>
<tr><td>✨Altair</td>  <td>Main Sequence✨</td></tr>
<tr><td>✨Altais</td>  <td>Giant✨</td></tr>
<tr><td>✨Antares</td>  <td>Supergiant✨</td></tr>
<tr><td>✨Denebola</td>  <td>Main Sequence✨</td></tr>
<tr><td>✨Dschubba</td> <td> Main Sequence✨</td></tr>
<tr><td>✨Etamin✨</td> <td> Giant✨</td></tr>
<tr><td>✨Gienah</td> <td> Giant✨</td></tr>
<tr><td>✨Gorgonea Tertia</td>  <td>Bright Giant✨</td></tr>
<tr><td>✨Kochab</td>  <td>Giant✨</td></tr>
<tr><td>✨Kraz✨</td>  <td>Main Sequence✨</td></tr>
<tr><td>✨Mintaka</td><td>Bright Giant✨</td></tr>
<tr><td>✨Miram :</td> <td>Supergiant✨</td></tr>
<tr><td>✨Mirphak</td> <td> Subgiant✨</td></tr>
<tr><td>✨Pherkad</td>  <td>Supergiant✨</td></tr>
<tr><td>✨Polaris </td> <td>Supergiant✨</td></tr>
<tr><td>✨Rastaban </td><td> Bright Giant✨</td></tr>
<tr><td>✨Regulus </td> <td>Main Sequence</td></tr>
<tr><td>✨Rotanev</td>  <td>Giant✨</td></tr>
<tr><td>✨Shetrak </td> <td>Giant✨</td></tr>
<tr><td>✨Sualocin</td> <td> Giant✨</td></tr>
<tr><td>✨Sulafat </td> <td>Giant✨</td></tr>
<tr><td>✨Tarazed </td><td> Bright Giant✨</td></tr>
<tr><td>✨Vega </td> <td>Main Sequence✨</td></tr>
<tr><td>✨Zosma </td><td> Main Sequence✨</td></tr>
</tbody>

      </table>
    </div>
  )
} else {
  return <button class="buttonCheat" onClick={handleCtrck}>Show Star Cheat Sheet</button>
}





    



}

export default CheatSheet