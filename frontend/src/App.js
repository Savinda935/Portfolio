import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;