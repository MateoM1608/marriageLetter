import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/:nombre/:cantidad/&&" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
