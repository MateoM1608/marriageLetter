import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Admin from './views/Admin';

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/:id/:nombre/:cantidad/&&" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
