import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StockModal from '../StockModal';
import StockDetailsButton from './StockDetailsButton';
import StockItemLabel from './StockItemLabel';
import { Stock } from '../../../interfaces/stock';
import { appColors } from '../../../theme/colors';

interface Props {
  item: Stock;
}

const StockListItem: FC<Props> = ({ item }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <StockItemLabel text={item.name} />
        <StockDetailsButton text={'Ver'} onPress={() => setVisible(true)} />
      </View>
      <StockModal item={item} visible={visible} setVisible={setVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.secondary,
    borderColor: appColors.secondary,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 16,
  },
});

export default StockListItem;
