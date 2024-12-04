import React from 'react';
import { StocksProvider } from './context/StocksProvider';
import { Layout } from './presentation/ui/Layout';
import Logo from './presentation/ui/Logo';
import StocksContainer from './presentation/stocks/StocksContainer';

const StocksApp = () => {
  return (
    <StocksProvider>
      <Layout>
        <Logo />
        <StocksContainer />
      </Layout>
    </StocksProvider>
  );
};

export default StocksApp;
