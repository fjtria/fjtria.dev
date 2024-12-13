import React, { useState } from 'react';
import './index.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div data-theme={isDark ? "dark" : ""}>
      <Navbar></Navbar>
    </div>
  );
}

export default App;