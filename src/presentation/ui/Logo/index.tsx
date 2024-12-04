import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { appColors } from '../../../theme/colors';

const Logo = () => <Image source={require('../../../assets/logo.jpeg')} style={styles.image} />;

const styles = StyleSheet.create({
  image: { alignSelf: 'center', height: 80, width: 80, borderRadius: 30, borderColor: appColors.primary, borderWidth: 2 },
});

export default Logo;
