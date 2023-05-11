import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import TrackerHome from './components/TrackerHome'
import HRDiagram from "./components/HRDiagram";
// import CheatSheet from "./components/CheatSheet";
// import Stars from "./components/Stars";
// import StarDetails from "./components/StarDetails";

function App() {
  return (
      
      <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trackerhome" element={<TrackerHome />} />
        <Route path="/hrdiagram" element={<HRDiagram />} />
        {/* <Route path="/cheatsheet" element={<CheatSheet />} /> */}
        {/* <Route path="/stars/:id" element={<StarDetails />} /> */}


      </Routes>
    </Router>

  );
}

export default App;