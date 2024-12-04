import React, { ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StocksContext } from './StocksContext';
import { Stock } from '../interfaces/stock';
import { originalStocks } from '../utils/originalStocks';

type StocksProviderProps = {
  children: ReactNode;
};

export const StocksProvider = ({ children }: StocksProviderProps) => {
  const [stocks, setStocks] = useState<Stock[]>(originalStocks);

  const filterList = (value: string) => {
    if (value.trim() === '') {
      setStocks(originalStocks);
      return;
    }

    setStocks(
      originalStocks.filter(
        (stock) =>
          stock.name.toLowerCase().includes(value.toLowerCase()) ||
          stock.symbol.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const sortList = (value: string) => {
    setStocks((prevStocks) => {
      if (value === 'asc') {
        return [...prevStocks].sort((a, b) => a.name.localeCompare(b.name));
      } else if (value === 'des') {
        return [...prevStocks].sort((a, b) => b.name.localeCompare(a.name));
      } else {
        return [...originalStocks];
      }
    });
  };

  const loadStocks = async () => {
    try {
      const storedStocks = await AsyncStorage.getItem('stocks');
      if (storedStocks) {
        setStocks(JSON.parse(storedStocks));
      }
    } catch (error) {
      console.error('Error al cargar los datos de stocks:', error);
    }
  };

  useEffect(() => {
    loadStocks();
  }, []);

  useEffect(() => {
    const saveStocks = async () => {
      try {
        await AsyncStorage.setItem('stocks', JSON.stringify(stocks));
      } catch (error) {
        console.error('Error al guardar los datos de stocks:', error);
      }
    };

    saveStocks();
  }, [stocks]);

  return (
    <StocksContext.Provider value={{
      stocks,
      setStocks,
      filterList,
      sortList,
    }}>
      {children}
    </StocksContext.Provider>
  );
};
