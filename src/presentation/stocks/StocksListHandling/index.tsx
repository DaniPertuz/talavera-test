import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StocksContext } from '../../../context/StocksContext';
import FilterListInput from './FilterListInput';
import SortButtonsContainer from './SortButtonsContainer';

const StocksListHandling = () => {
  const [search, setSearch] = useState('');
  const { filterList } = useContext(StocksContext);

  const handleFilter = (value: string) => {
    setSearch(value);
    filterList(value);
  };

  return (
    <View style={styles.container}>
      <SortButtonsContainer />
      <FilterListInput search={search} handleFilter={handleFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', gap: 15, paddingHorizontal: 16 },
});

export default StocksListHandling;
