import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./components/pages/home/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserList from "../src/components/pages/userList/UserList";
import User from "./components/pages/user/User";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/users" element={ <UserList />} />
          <Route path="/user/:userId" element={ <User />} />
        </Routes>
       
      </div>
      
    
    </Router>
  );
}

export default App;
