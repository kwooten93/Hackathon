
import './App.css';
import PostRequest from "./components/AddItem";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetItems from './components/ItemData';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<GetItems/>} />
      <Route path="/addItems" element={<PostRequest />} />
    </Routes>
      <div className="App">
        <header>
        <NavBar />
        </header>
          
      </div>
    </Router>
  );
}

export default App;
