import React from 'react';
import './App.css';
import Main from './Pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/update/:id' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
