import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.text
    },
    seperator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
})

export const RowItem = ({text, rightIcon, onPress}) => {
    return (
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {rightIcon}
      </TouchableOpacity>
    )
}

export const RowSeperator = () => <View style={styles.seperator} />