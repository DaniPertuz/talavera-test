import React from 'react';
import Container from '../../ui/Container';
import StocksList from '../StocksList';
import StocksListHandling from '../StocksListHandling';

const StocksContainer = () => {
  return (
    <Container>
      <StocksListHandling />
      <StocksList />
    </Container>
  );
};

export default StocksContainer;
