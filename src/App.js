
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/navbar';
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Resume from './Resume/Resume';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;
