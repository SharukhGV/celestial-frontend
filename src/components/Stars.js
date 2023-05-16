// // import axios from "axios";
// import { useState, useEffect } from "react";
// import Star from "./Star";
// import starscompletegame from "./starscompletegame"
// // import StarDetails from "./StarDetails";
// function Stars(){
   
//       const [stars, setstar] = useState([]);
//       // const API = process.env.REACT_APP_API_URL;
//       const API = starscompletegame

//       // useEffect(() => {
//       //   axios
//       //     .get(`${API}/stars`)
//       //     .then((response) => setstars(response.data))
//       //     .catch((e) => console.error("catch", e));
//       // }, [API]);

//       useEffect(() => {
//         // axios
//     fetch(API)
//           // .get(`${API}/stars/${id}`)
//           // .then((response) => {
//             .then(response => response.json())
//        .then(response => setstar(JSON.stringify((response.data))))
    
       
//           .catch((err) => {
//             // navigate("/not-found");
//             console.log(err);
//           });
//         });

//     console.log(stars)
//       return (
//         <table className="thestartable">
//           <thead>
//     <tr>
//     <th>Number</th>
//     <th>Star Name</th>
//     <th>Absolute Magnitude</th>
//   </tr></thead>
//               {stars.map((individualstars, index) => {

//                 return (
                  
//                   <Star
//                     key={individualstars.id} individualstarID={individualstars.id} iau_name={individualstars.iau_name} star_catalogue={individualstars.star_catalogue} constellation={individualstars.constellation} type_star={individualstars.type_star} colorindex={individualstars.colorindex} apparentmag={individualstars.apparentmag} absolutemag={individualstars.absolutemag}  distance={individualstars.distance} index={index}
//                   />
//                 );
//               })}
         
//         </table>
//       );
//     }
    

// export default Stars;