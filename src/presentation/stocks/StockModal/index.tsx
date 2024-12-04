import React, { FC } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { appColors } from '../../../theme/colors';
import { Stock } from '../../../interfaces/stock';
import ModalLabel from './ModalLabel';
import ModalCloseButton from './ModalCloseButton';

interface Props {
  item: Stock;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const StockModal: FC<Props> = ({ item, visible, setVisible }) => {
  const { name, price, symbol, daily_change } = item;

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(!visible)}
    >
      <View style={styles.container}>
        <View style={styles.details}>
          <ModalLabel text={`Name: ${name}`} />
          <ModalLabel text={`Price: ${price}`} />
          <ModalLabel text={`Symbol: ${symbol}`} />
          <ModalLabel text={`Daily change: ${daily_change}`} />
          <ModalCloseButton text={'Cerrar'} onPress={() => setVisible(false)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', marginHorizontal: 40 },
  details: { backgroundColor: appColors.tertiary, borderColor: appColors.secondary, borderRadius: 20, borderWidth: 2, gap: 10, padding: 20 },
});

export default StockModal;
