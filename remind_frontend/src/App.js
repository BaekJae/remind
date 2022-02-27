import './App.css';
import Login from './Login.js';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Main from './Main.js';
import Board from './Board.js';
import Logout from './Logout.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/board/*" element={<Board/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
