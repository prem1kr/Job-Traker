import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import AddJob from './components/AddJob';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/add" element={<AddJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;