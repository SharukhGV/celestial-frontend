import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Nav from './components/Nav'
function App() {
  return (
      
      <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dreams" element={<Index />} />
        <Route path="/dreams/:id" element={<Show />} />
        <Route path="/dreams/:id/edit" element={<Edit />} />
        <Route path="/dreams/new" element={<NewForm />} />
        <Route path="/about" element={<About />} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
