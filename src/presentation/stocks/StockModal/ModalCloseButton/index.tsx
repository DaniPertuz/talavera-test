import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { appColors } from '../../../../theme/colors';

interface Props {
  text: string;
  onPress: () => void;
}

const ModalCloseButton: FC<Props> = ({ text, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: { alignSelf: 'center', backgroundColor: appColors.danger, borderRadius: 20, marginTop: 20, paddingHorizontal: 20, paddingVertical: 10 },
  buttonText: { color: appColors.tertiary, fontSize: 16 },
});

export default ModalCloseButton;
