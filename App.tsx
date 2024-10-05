import React from 'react';
import { ThemeProvider } from './src/contexts/ThemeContext';
import Welcome from './src/screens/Welcome';

const App = () => {
  return (
    <ThemeProvider>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
