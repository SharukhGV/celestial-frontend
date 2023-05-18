import { useState,useEffect } from "react"
import Acrab from "./stars/Acrab.png"
import AlSalib from "./stars/Al Salib.png"
import Algorab from "./stars/Algorab.png"
import Alnilam from "./stars/Alnilam.png"
import Alnitak from "./stars/Alnitak.png"
import Alshain from "./stars/Alshain.png"
import Altair from "./stars/Altair.png"
import Altais from "./stars/Altais.png"
import Antares from "./stars/Antares.png"
import Betelgeuse from "./stars/Betelgeuse.png"
import Dschubba from "./stars/Dschubba.png"
import Denebola from "./stars/Denebola.png"
import Etamin from "./stars/Etamin.png"
import Gienah from "./stars/Gienah.png"
import GorgoneaTertia from "./stars/Gorgonea Tertia.png"
import Kochab from "./stars/Kochab.png"
import Kraz from "./stars/Kraz.png"
import Miram from "./stars/Miram.png"
import Mintaka from "./stars/Mintaka.png"
import Mirphak from "./stars/Mirphak.png"
import Pherkad from "./stars/Pherkad.png"
import Polaris from "./stars/Polaris.png"
import Rastaban from "./stars/Rastaban.png"
import Regulus from "./stars/Regulus.png"
import Rotanev from "./stars/Rotanev.png"
import Sirius from "./stars/Sirius.png"
import Sheliak from "./stars/Sheliak.png"
import Sualocin from "./stars/Sualocin.png"
import Sulafat from "./stars/Sulafat.png"
import Tarazed from "./stars/Tarazed.png"
import Vega from "./stars/Vega.png"
import Zosma from "./stars/Zosma.png"

function StarSearch(){

// const [starInfo, setStarInfo]=


// useEffect(()=>{

// if((starscompletegame.name).includes())

// },[])

// function searchWords(searchTerm) {
//     return words.filter(word => word.includes(searchTerm.toLowerCase()));
//   }
  

const starData = [
    {
      "id": 1,
      "name": "Vega",
      "apparent": 0.0,
      "absolute": 0.57,
      "color": 0.0,
      "distance": 25.04,
      "src": Vega
    },

    {
      "id": 2,
      "name": "Regulus",
      "apparent": 1.35,
      "absolute": -0.58,
      "color": 0.09,
      "distance": 79.3,
      "src": Regulus
    },

    {
      "id": 3,
      "name": "Alnilam",
      "apparent": 1.65,
      "absolute": -7.26,
      "color": -0.19,
      "distance": 1976.71,
      "src": Alnilam
    },

    {
      "id": 4,
      "name": "Polaris",
      "apparent": 1.95,
      "absolute": -3.66,
      "color": -0.63,
      "distance": 432.57,
      "src": Polaris
    },

    {
      "id": 5,
      "name": "Kochab",
      "apparent": 2.05,
      "absolute": -0.97,
      "color": 1.45,
      "distance": 130.93,
      "src": Kochab
    },

    {
      "id": 6,
      "name": "Dschubba",
      "apparent": 2.35,
      "absolute": -3.1,
      "color": -0.03,
      "distance": 401.67,
      "src": Dschubba
    },

    {
      "id": 7,
      "name": "Mintaka",
      "apparent": 2.4,
      "absolute": -4.84,
      "color": -0.03,
      "distance": 916.17,
      "src": Mintaka
    },

    {
      "id": 8,
      "name": "Acrab",
      "apparent": 2.6,
      "absolute": -3.46,
      "color": -0.06,
      "distance": 530.34,
      "src": Acrab
    },

    {
      "id": 9,
      "name": "Kraz",
      "apparent": 2.65,
      "absolute": -0.6,
      "color": 0.89,
      "distance": 145.67,
      "src": Kraz
    },

    {
      "id": 10,
      "name": "Algorab",
      "apparent": 2.9,
      "absolute": -0.77,
      "color": 0.0,
      "distance": 86.86,
      "src": Algorab
    },

    {
      "id": 11,
      "name": "Pherkad",
      "apparent": 3.0,
      "absolute": -2.87,
      "color": 0.07,
      "distance": 486.8,
      "src": Pherkad
    },

    {
      "id": 12,
      "name": "Gorgonea Tertia",
      "apparent": 3.3,
      "absolute": -1.57,
      "color": 1.52,
      "distance": 307.69,
      "src": GorgoneaTertia
    },

    {
      "id": 13,
      "name": "Sheliak",
      "apparent": 3.5,
      "absolute": -3.85,
      "color": 0.0,
      "distance": 962.11,
      "src": Sheliak
    },

    {
      "id": 14,
      "name": "Sualocin",
      "apparent": 3.85,
      "absolute": -0.49,
      "color": -0.03,
      "distance": 240.71,
      "src": Sualocin
    },

    {
      "id": 15,
      "name": "Betelgeuse",
      "apparent": 0.45,
      "absolute": -5.47,
      "color": 1.52,
      "distance": 497.95,
      "src": Betelgeuse
    },

    {
      "id": 16,
      "name": "Rotanev",
      "apparent": 4.1,
      "absolute": 1.72,
      "color": 0.32,
      "distance": 97.39,
      "src": Rotanev
    },

    // {
    //   "id": 17,
    //   "name": "The Sun",
    //   "apparent": -26.74,
    //   "absolute": 4.83,
    //   "color": 0.65,
    //   "distance": 0.00001581
    // },

    // {
    //   "id": 18,
    //   "name": "The Sun",
    //   "apparent": -26.74,
    //   "absolute": 4.83,
    //   "color": 0.65,
    //   "distance": 0.00001581,
    // },

    {
      "id": 19,
      "name": "Altair",
      "apparent": 0.75,
      "absolute": 2.2,
      "color": 0.22,
      "distance": 16.73,
      "src": Altair
    },

    {
      "id": 20,
      "name": "Antares",
      "apparent": 1.05,
      "absolute": -5.1,
      "color": 1.86,
      "distance": 553.75,
      "src": Antares
    },

    {
      "id": 21,
      "name": "Mirphak",
      "apparent": 1.75,
      "absolute": -4.21,
      "color": 0.48,
      "distance": 506.45,
      "src": Mirphak
    },

    {
      "id": 22,
      "name": "Alnitak",
      "apparent": 1.85,
      "absolute": -5.15,
      "color": -0.09,
      "distance": 817.43,
      "src": Alnitak
    },

    {
      "id": 23,
      "name": "Denebola",
      "apparent": 2.1,
      "absolute": 1.89,
      "color": 0.1,
      "distance": 35.88,
      "src": Denebola
    },

    {
      "id": 24,
      "name": "Etamin",
      "apparent": 2.2,
      "absolute": -1.17,
      "color": 1.52,
      "distance": 154.28,
      "src": Etamin
    },

    {
      "id": 25,
      "name": "Gienah",
      "apparent": 2.55,
      "absolute": -0.82,
      "color": -0.09,
      "distance": 153.63,
      "src": Gienah
    },

    {
      "id": 26,
      "name": "Zosma",
      "apparent": 2.55,
      "absolute": 1.28,
      "color": 0.13,
      "distance": 58.43,
      "src": Zosma
    },

    {
      "id": 27,
      "name": "Tarazed",
      "apparent": 2.7,
      "absolute": -2.72,
      "color": 1.52,
      "distance": 394.86,
      "src": Tarazed
    },

    {
      "id": 28,
      "name": "Rastaban",
      "apparent": 2.75,
      "absolute": -2.58,
      "color": 0.95,
      "distance": 380.14,
      "src": Rastaban
    },

    {
      "id": 29,
      "name": "Altais",
      "apparent": 3.05,
      "absolute": 0.67,
      "color": 0.98,
      "distance": 97.42,
      "src": Altais
    },

    {
      "id":30,
      "name": "Sulafat",
      "apparent": 3.25,
      "absolute": -3.15,
      "color": -0.06,
      "distance": 620.07,
      "src": Sulafat
    },

    {
      "id": 31,
      "name": "Alshain",
      "apparent": 3.7,
      "absolute": 3.02,
      "color": 0.85,
      "distance": 44.68,
      "src": Alshain
    },

    {
      "id": 32,
      "name": "Miram",
      "apparent": 3.75,
      "absolute": -3.4,
      "color": 1.7,
      "distance": 879.13,
      "src": Miram
    },

    {
      "id": 33,
      "name": "A Salib",
      "apparent": 4.25,
      "absolute": 1.79,
      "color": 1.04,
      "distance": 101.48,
      "src": AlSalib
    }
]





    const [query, setQuery] = useState("")
    
    const handleQueryChange = event => {
      setQuery(event.target.value)
    }
    
    const filteredStars = starData.filter(star => {
      return star.name.toLowerCase().includes(query.toLowerCase())
    })


    return (
        <div>
          <div><strong>Search for a Star</strong></div>
          <input type="text" value={query} onChange={handleQueryChange} />
          <ul>
            {filteredStars.map(star => (
              <li key={star.id}>
                <img src={star.src} alt={star.name} className="starCard" />
                <p>{star.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )




    
}


export default StarSearch