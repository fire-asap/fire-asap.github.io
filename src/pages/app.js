import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './DTES';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dtes" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
