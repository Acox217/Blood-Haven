// src/components/MyComponent.tsx
import React from 'react';
import { useTheme } from '../styles/ThemeContext';
import '../styles/design.css'; // just in case

const MyComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <h1>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h1>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default MyComponent;
