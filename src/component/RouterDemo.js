import React from 'react';
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import About from './About';
import Profile from './Profile';
import Home from './Home';
import LoginFail from './LoginFail';
import LoginSucces from './LoginSucces';

function RouterDemo(props) {
    return (
    
      <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/about">About</Link></li>
                  </ul>
              </nav>
            <Routes>

              <Route exact path="/" element={<Home/>} />
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/LoginSuccess" element={<LoginSucces/>}/>
              <Route exact path="/LoginFail" element={<LoginFail/>}/>
            </Routes>
        </Router>
    );
}

export default RouterDemo;