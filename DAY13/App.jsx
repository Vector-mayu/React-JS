import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router";
import Dashboard from "./src/Dashboard";
import Contact from "./src/Contacts.jsx";
import Details from "./src/Details.jsx";
import Homes from "./src/Home.jsx";
import Github from "./src/Github.jsx";


function App(){
    return(
      <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
      </nav>

        <Routes>
          <Route path="/" element={<Homes/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/Details" element={<Details/>}></Route>

          <Route path="/Github/:name" element={<Github/>}></Route>
        </Routes>
      </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);