import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { appColors } from '../../../../theme/colors';

interface Props {
  text: string;
  onPress: () => void;
}

const StockDetailsButton: FC<Props> = ({ text, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
  text: { color: appColors.success },
});

export default StockDetailsButton;
