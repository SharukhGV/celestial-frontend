// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// // import axios from "axios";
// import starscompletegame from "./starscompletegame"

// function StarDetails({iau_name, star_catalogue, constellation, type_star, colorindex, apparentmag, absolutemag, distance, key}){
//   // const {id} = useParams();
// // console.log(id)
//   // const API = process.env.REACT_APP_API_URL;
//   const API = starscompletegame
//   const [star, setstar] = useState([]);
// //   const navigate = useNavigate();
// //   const [thecolor, setthecolor] = useState("black");

//   // useEffect(() => {}, []);
//   // const API = process.env.REACT_APP_API_URL;
// // let apple = star
// // apple=null
// // {null}
//   // /promise
//   useEffect(() => {
//     // axios
// fetch(API)
//       // .get(`${API}/stars/${id}`)
//       // .then((response) => {
//         .then(response => response.json())
//    .then(response => 
//     setstar(JSON.stringify((response.data)))
//     )

   
//       // .catch((err) => { err
//       //   // navigate("/not-found");
//       //   // console.log(err);
//       // });
//     });

// //     useEffect(()=>{
// // fetch(`${API}/stars/${id}`)
// //       .then((response) => {
// // console.log(response.data.id)
// // .catch((err) => {
// //   // navigate("/not-found");
// //   console.log(err);
// // });
// //     }
// //   )},[API,id])


//   // const handleDelete = () => {};
// //   const deleteStar = () => {
// //     axios
// //       .delete(`${API}/stars/${star.id}`)
// //       .then(() => {
// //         navigate(`/stars`);
// //       })
// //       .catch((error) => console.error(error));
// //   };

// //   const handleDelete = () => {
// //     deleteStar();
// //   };


// // let thecolordeterminate = "black"
// // if(star.good_star === "good")

// //   const textcoloring= {
// //     color: thecolor
// // }




// // useEffect(()=>{
// //   if(star.good_star === "good"){
// //   setthecolor("green")}
// //   if(star.good_star === "bad"){
// //     setthecolor("orange")}
// //     if(star.good_star === "neutral"){
// //       setthecolor("black")}

// // },[star.good_star])

// // function StarDetails({iau_name, star_catalogue, constellation, type_star, colorindex, apparentmag, absolutemag, distance}){


//   return (
    
//     <article className="cardContact" key={key}>

//       <fieldset >
//         <legend><strong>Everyone Can Look Up At the Stars...</strong></legend>

//         <table className="thestartableSHOW">
//   <tr>
//     <th>Category</th>
//     <th>Information</th>
//   </tr>
//   <tr>
//     <td>Star Name</td>
//     <td>{iau_name}</td>
//   </tr>
//   <tr>
//     <td>Star Catalogue: </td>
//     <td>{star_catalogue}</td>
//   </tr>
//   <tr>
//     <td>Constellation</td>
//     <td>{constellation}</td>
//   </tr>
//   <tr>
//     <td>Type of Star</td>
//     <td>{type_star}</td>
//   </tr>
//   <tr>
//     <td>Color Index: B-V</td>
//     <td>{colorindex}</td>
//   </tr>
//   <tr>
//     <td>Apparent Magnitude</td>
//     <td>{apparentmag}</td>
//   </tr>
//   <tr>
//     <td>Absolute Magnitude</td>
//     <td>{absolutemag}</td>
//   </tr>
//   <tr>
//     <td>Distance</td>
//     <td>{distance}</td>
//   </tr>


// </table>
       
//       </fieldset>

//       <div className="showNavigation">
//         <span>
//           <Link to={`/stars`}>
//             <button>Back</button>
//           </Link>
//         </span>
//         <span>
//           <Link to={`/stars/${star.id}/edit`}>
//             <button className="editbutton">Edit</button>
//           </Link>
//         </span>
//         {/* <span>
//           <button className="delete" onClick={handleDelete}>Delete</button>
//         </span> */}
//       </div>


//     </article>
//   );
// }

// export default StarDetails;