import './App.css';
import Login from './pages/login/Login';
import Home  from './pages/home/Home';
import Profile  from './pages/profile/Profile';
import Registration from './pages/registration/Registration';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/registration" element={<Registration/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/Profile" element={<Profile/>}/>
          <Route exact path="/Profile/:username" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
