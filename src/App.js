import './App.css';
 import HomePage from './HomePage';
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Login from './Login';
 import SignUp from './SignUp';
import UserList from './UserList';
import AddUser from './AddUser';

function App() {
  return (
    <>
      

    <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/userlisting" element={<UserList/>} />
    <Route path="/adduser" element={<AddUser/>} />
  </Routes>
</BrowserRouter>
    </>
    
  );
}

export default App;
