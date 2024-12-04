import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { appColors } from '../../../../../theme/colors';

interface Props {
  isPressed: boolean;
  text: string;
  onPress: () => void;
}

const SortButton: FC<Props> = ({ isPressed, text, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, isPressed && styles.onPressed]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: appColors.primary, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 5 },
  onPressed: { backgroundColor: appColors.secondary },
  text: { color: appColors.tertiary },
});

export default SortButton;
