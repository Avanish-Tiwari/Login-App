import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

export default function App() {
  // Check if token already exists (user already logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [register,setRegister]=useState(false);
  const handleLogin = () => setIsLoggedIn(true);
  const handleRegister=()=>{
    setRegister(prev=>!prev);
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  if(isLoggedIn){
    return <Dashboard onLogout={handleLogout}/>
  }else if(register){
    return <Register handleRegister={handleRegister}/>
  }else{
    return <Login onLogin={handleLogin} handleRegister={handleRegister}/>
  }

  return isLoggedIn
    ? <Dashboard onLogout={handleLogout} />
    : <Login onLogin={handleLogin} />;
}