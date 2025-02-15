// import Header from '~/components/Header';
// import Card from '~/components/card';
// import TodoContainer from '~/components/TodoContainer';

import './index.css'
import { useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
function App() {
  const[users,setUsers]=useState([
    {
        username:"raji",
        password:"123"
    }
])
  return (
  
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setusers={setUsers}/>} />
        <Route path="/Signup" element={<Signup users={users} setusers={setUsers}/>} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

