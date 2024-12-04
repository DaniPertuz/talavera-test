import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { appColors } from '../../../../theme/colors';

interface Props {
  text: string;
}

const ModalLabel: FC<Props> = ({ text }) => <Text style={styles.text}>{text}</Text>;

const styles = StyleSheet.create({
  text: { color: appColors.secondary, fontSize: 16 },
});

export default ModalLabel;
