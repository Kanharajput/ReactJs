import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import List from './List'
import Create from './Create.js';
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />   
        <div className="content">
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/list" element = {<List />} />
            <Route path="/create" element = {<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// export App so that is imported by other files
export default App;
