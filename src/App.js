import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import List from './List'
import Create from './Create.js';
import BlogDetail from './BlogDetail.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound.js';

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
            <Route path="/blog-detail/:id" element = {<BlogDetail />} />
            <Route path="*" element= {<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// export App so that is imported by other files
export default App;
