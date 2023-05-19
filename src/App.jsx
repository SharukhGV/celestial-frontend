import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import TrackerHome from './components/TrackerHome';
import StarSearch from "./components/StarSearch";
import Tutorial from "./components/Tutorials"
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
        <Route path="/heavens" element={<StarSearch />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/*" element={<TrackerHome />} />

       
      </Routes>
    </Router>

  );
}

export default App;