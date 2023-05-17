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
              to="/hrdiagram"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              HRDiagram
            </NavLink></li>

            <li> <NavLink
              className="links"
              to="/stars"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              Stars
            </NavLink></li>
  
          </ul>
        </nav>

);
    }
    export default Nav;