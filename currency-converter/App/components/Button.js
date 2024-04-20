import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});

export const Button = ({ onPress, text, image }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {image}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};