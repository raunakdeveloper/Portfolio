import React from 'react';
import Portfolio from './components/pages/Portfolio';
import { PortfolioProvider } from './context/PortfolioContext';

function App() {
  return (
    <PortfolioProvider>
      <Portfolio />
    </PortfolioProvider>
  );
}

export default App;


