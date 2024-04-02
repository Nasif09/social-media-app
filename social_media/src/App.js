import './App.css';
import Login from './pages/login/Login';
import Home  from './pages/home/Home';
import Profile  from './pages/profile/Profile';
import Registration from './pages/registration/Registration';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const{user} = useContext(AuthContext)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ user ? <Home/> : <Registration/> }/>
          <Route path="/registration" element={ user ? <Navigate to="/"/> : <Registration/> }/>
          <Route path="/login" element={ user ? <Navigate to="/"/> : <Login/> }/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/:username" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
