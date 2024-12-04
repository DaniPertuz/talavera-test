import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { StocksContext } from '../../../context/StocksContext';
import StockListItem from '../StockListItem';
import { appColors } from '../../../theme/colors';

const StocksList = () => {
  const { stocks } = useContext(StocksContext);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={stocks}
      renderItem={({ item }) => <StockListItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: { borderColor: appColors.success, borderWidth: 1, borderRadius: 20, padding: 10 },
});

export default StocksList;
