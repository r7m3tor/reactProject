// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaletteComponent from './components/palette.js';
import ColorPage from './components/ColorPage.js';
import palettesData from './pallete.json'; // Your JSON file with color data

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Color Palette App</h1>
        <Routes>
          <Route path="/" element={<PaletteComponent palettes={palettesData} />} />
          <Route path="/palette/:id" element={<ColorPage palettes={palettesData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
