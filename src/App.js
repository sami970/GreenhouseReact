import './App.css';
import {Home} from './Home';
import {GreenHouse} from './GreenHouse';
import {ThresHold} from './ThresHold';
import {Measurement} from './Measurement';
import {User} from './User';

import {BrowserRouter, Route,Routes, Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/user">
            User
            </NavLink>            
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/greenhouse">
            GreenHouse
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/thresHold">
            ThresHold
            </NavLink>            
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/measurement">
            Measurement
            </NavLink>            
          </li>
        
        </ul>
      </nav>
    
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/greenhouse' element={<GreenHouse/>}/>
        <Route path='/threshold' element={<ThresHold/>}/>
        <Route path='/measurement' element={<Measurement/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
