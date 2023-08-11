import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import List from './List'
import { useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <Navbar />   
      <Home />
      <List />
    </div>
  );
}

// export App so that is imported by other files
export default App;
