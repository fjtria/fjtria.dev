import React, { useState } from 'react';
import './index.css';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Navbar from "./components/Navbar/Navbar";

function App() {
  // React Dark Mode Toggle: https://www.youtube.com/watch?v=sy-rRtT84CQ
  const [isDark, setIsDark] = useState(true);

  return (
    <div data-theme={isDark ? "dark" : ""}>
      <ThemeToggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      ></ThemeToggle>
      <Navbar></Navbar>
    </div>
  );
}

export default App;