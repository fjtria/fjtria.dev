import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './index.css';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";

function App() {
  // React Dark Mode Toggle: https://www.youtube.com/watch?v=sy-rRtT84CQ
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", themePreference);

  return (
    <div data-theme={isDark ? "dark" : ""}>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Works></Works>

      <ThemeToggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      ></ThemeToggle>

    </div>
  );
}

export default App;