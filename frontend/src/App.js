import React from 'react';
import './App.css';
import Main from './Pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//icon and name.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/update/:id' element={<Main />} />
        {/* /:state/:id */}
        {/* if "/" > navigate to state /:state */}
        {/* <Route path="/" element={<Navigate to="/state" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
