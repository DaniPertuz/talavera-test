import { createContext } from 'react';
import { Stock } from '../interfaces/stock';

type StocksState = {
  stocks: Stock[];
  setStocks: (stocks: Stock[]) => void;
  filterList: (value: string) => void;
  sortList: (value: string) => void;
};

export const StocksContext = createContext<StocksState>({} as StocksState);
