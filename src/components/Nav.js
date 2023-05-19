import { NavLink } from "react-router-dom";


function Nav(){
let activeStyle = {
    textDecoration: "underline",
    color: "white",
  };

  let nonactiveStyle = {
    color: "limegreen",
  };

    return (
        <nav>
         
          <ul className="no-bullets">
           <li> <NavLink
              className="links"
              to="/"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle
            }
            >
              Home
            </NavLink></li>

           

           <li> <NavLink
              className="links"
              to="/trackerhome"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              Tracker Home
            </NavLink></li>

            

            <li> <NavLink
              className="links"
              to="/heavens"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              
              Heavens
            </NavLink></li>

            <li> <NavLink
              className="links"
              to="/tutorial"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              
              Tutorials
            </NavLink></li>
  
          </ul>
        </nav>

);
    }
    export default Nav;