import React from 'react';
import { StatusBar, ScrollView, Linking, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import {RowItem, RowSeperator} from '../components/RowItem';

const openLink = (url) =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.')
  );

export default () => {
    return (
      <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <RowItem
          text="Themes"
          onPress={()=> alert('todo!')}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
        />

        <RowSeperator />

        <RowItem
          text="React Native Basics"
          onPress={() =>
            openLink(
              'https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter'
            )
          }
          rightIcon={
            <Entypo name="export" size={20} color={colors.blue} />
        }
        />

        <RowSeperator />

        <RowItem
          text="Example"
          onPress={() => openLink('https://reactnativebyexample.com')}
          rightIcon={
            <Entypo name="export" size={20} color={colors.blue} />
        }
        />
      </ScrollView>
    );
};