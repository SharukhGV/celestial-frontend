// import { useState,useEffect } from "react"

// function Stars() {

//     const [spectralType, setSpectralType] = useState([])
//     const [search1, setsearch1] = useState({"name":"", "apparent":0.00, "absolute": 0.00, "color": 0.00,"distance": 0.00})

 

//     useEffect(()=>{
       


//         if (starsArray.absolute <= (-10) && starsArray.absolute >= (-15) && starsArray.color >= (-0.33) && starsArray.color <= (1.40)){setSpectralType("Hypergiant")}
// //
//         if (starsArray.absolute <= (-5) && starsArray.absolute >= (-10) && starsArray.color >= (-0.33) && starsArray.color <= (1.40) <= (1.40)){setSpectralType("Supergiant")}
// //
//         if (starsArray.absolute <= (5) && starsArray.absolute >= (0) && starsArray.color >= (-0.33) && starsArray.color <= (1.40) <= (1.40)){setSpectralType("Bright Giant or Giant")}

//         // if (starsArray.absolute <= (5) && starsArray.absolute >= (10) && starsArray.color >= (-0.33) && starsArray.color <= (1.40) <= (1.40)){setSpectralType("Subgiants or Dwarfs")}

//         // if (starsArray.absolute <= (-10) && starsArray.absolute >= () && starsArray.color >= (-0.33) && starsArray.color <= (1.40) <= (1.40)){setSpectralType("Subdwarfs or White Dwarfs")}


//     },[search1])


//     const addItem = e => {
//         e.preventDefault();
//         const item = e.target.newItem.value;
//         if (item) setList([...list, item]);
//         e.target.reset();
//       };

//     const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));
    


    

// let starsArray = [
    
//     {"name":"Vega", "apparent":0.00, "absolute": 0.57, "color": 0.00,"distance": 25.04},

//     {"name": "Regulus", "apparent":1.35, "absolute": -0.58, "color": 0.09,"distance": 79.30},

//     {"name": "Alnilam", "apparent":1.65, "absolute": -7.26, "color": -0.19,"distance": 1976.71},

    
//     {"name": "Polaris", "apparent":1.95, "absolute": -3.66, "color": -0.63,"distance": 432.57},


//     {"name": "Kochab", "apparent":2.05, "absolute": -0.97, "color": 1.45, "distance": 130.93},

//     {"name": "Dschubba", "apparent":2.35, "absolute": -3.10, "color": -0.03, "distance": 401.67},

//     {"name": "Mintaka", "apparent":2.40, "absolute": -4.84, "color": -0.03, "distance": 916.17},
 
//     {"name": "Acrab", "apparent":2.60, "absolute": -3.46, "color": -0.06, "distance": 530.34},

//     {"name": "Kraz", "apparent":2.65, "absolute": -0.60, "color": 0.89, "distance": 145.67},
    
//     {"name": "Algorab", "apparent":2.90, "absolute": -0.77, "color": 0.00, "distance": 86.86},
    
//     {"name": "Pherkad", "apparent":3.00, "absolute": -2.87, "color": 0.07, "distance": 486.80},
    
//     {"name": "Gorgonea Tertia", "apparent":3.30, "absolute": -1.57, "color": 1.52, "distance": 307.69},
    
    
//     {"name": "Sheliak", "apparent":3.50, "absolute": -3.85, "color": 0.00, "distance": 962.11},
    
//     {"name": "Sualocin", "apparent":3.85, "absolute": -0.49, "color": -0.03, "distance": 240.71},

//     {"name": "Betelgeuse", "apparent":0.45, "absolute": -5.47, "color": 1.52, "distance": 497.95},

//     {"name": "Rotanev", "apparent":4.10, "absolute": 1.72, "color": 0.32, "distance": 97.39},

//     {"name": "The Sun", "apparent": -26.74, "absolute": 4.83, "color": 0.65, "distance": 0.00001581},

//     {"name": "The Sun", "apparent": -26.74, "absolute": 4.83, "color": 0.65, "distance": 0.00001581},

//     {"name": "Altair", "apparent": 0.75, "absolute": 2.20, "color": 0.22, "distance": 16.73},

//     {"name": "Antares", "apparent": 1.05, "absolute": -5.10, "color": 1.86, "distance": 553.75},    

//     {"name": "Mirphak", "apparent": 1.75, "absolute": -4.21, "color": 0.48, "distance": 506.45},

//     {"name": "Alnitak", "apparent": 1.85, "absolute": -5.15, "color": -0.09, "distance": 817.43},

//     {"name": "Denebola", "apparent": 2.10, "absolute": 1.89, "color": 0.10, "distance": 35.88},

//     {"name": "Etamin", "apparent": 2.20, "absolute": -1.17, "color": 1.52, "distance": 154.28},

//     {"name": "Gienah", "apparent": 2.55, "absolute": -0.82, "color": -0.09, "distance": 153.63},

//     {"name": "Zosma", "apparent": 2.55, "absolute": 1.28, "color": 0.13, "distance": 58.43},

//     {"name": "Tarazed", "apparent": 2.70, "absolute": -2.72, "color": 1.52, "distance": 394.86},

//     {"name": "Rastaban", "apparent": 2.75, "absolute": -2.58, "color": 0.95, "distance": 380.14},

//     {"name": "Altais", "apparent": 3.05, "absolute": 0.67, "color": 0.98, "distance": 97.42},


//     {"name": "Sulafat", "apparent": 3.25, "absolute": -3.15, "color": -0.06, "distance": 620.07},


//     {"name": "Alshain", "apparent": 3.70, "absolute": 3.02, "color": 0.85, "distance": 44.68},


//     {"name": "Miram", "apparent": 3.75, "absolute": -3.40, "color": 1.70, "distance": 879.13},


//     {"name": "A Salib", "apparent": 4.25, "absolute": 1.79, "color": 1.04, "distance": 101.48}

// ]












// return(



// <div>
// <label for="site-search">Search the Sky:</label>
// <input type="search" id="star-search" name="stars7"></input>
// <button>Search</button>
// </div>

// )
// }

// export default Stars