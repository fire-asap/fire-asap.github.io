import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './DETS';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dets" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;