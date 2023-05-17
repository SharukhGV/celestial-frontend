import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import TrackerHome from './components/TrackerHome';
import HRDiagram from "./components/HRDiagram";
import StarImages from "./components/StarImages";
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
        <Route path="/stars" element={<StarImages />} />

       
      </Routes>
    </Router>

  );
}

export default App;
