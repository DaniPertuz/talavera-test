import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StocksContext } from '../../../../context/StocksContext';
import SortButton from './SortButton';

const SortButtonsContainer = () => {
  const { sortList } = useContext(StocksContext);
  const [pressedButton, setPressedButton] = useState<string | null>(null);

  const handlePress = (value: string) => {
    setPressedButton(value);
    sortList(value);
  };

  return (
    <View style={styles.container}>
      <SortButton text={'DEF'} onPress={() => handlePress('def')} isPressed={pressedButton === 'def'} />
      <SortButton text={'ASC'} onPress={() => handlePress('asc')} isPressed={pressedButton === 'asc'} />
      <SortButton text={'DES'} onPress={() => handlePress('des')} isPressed={pressedButton === 'des'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10 },
});

export default SortButtonsContainer;
