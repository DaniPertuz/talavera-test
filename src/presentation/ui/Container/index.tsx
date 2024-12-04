import React, { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { appColors } from '../../../theme/colors';

const { width, height } = Dimensions.get('window');

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.tertiary,
    borderRadius: 30,
    gap: 20,
    height: height * 0.7,
    marginVertical: height * 0.05,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: width * 0.9,
  },
});

export default Container;
