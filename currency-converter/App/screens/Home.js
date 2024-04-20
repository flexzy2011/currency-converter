import React, {useState, useContext} from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import {format} from 'date-fns';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import {ConversionInput} from '../components/ConversionInput';
import {Button} from '../components/Button';
import { ConversionContext } from '../util/ConversionContext';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex : 1
    },
    content: {
      paddingTop: screen.height * 0.1,
    },
    logoContainer: {
      alignItems:'center',
      justifyContent: 'center'
    },
    logoBackground: {
      width: screen.width*0.45,
      height: screen.width*0.45
    },
    logo: {
      position: 'absolute',
      width: screen.width * 0.25,
      height: screen.width * 0.25,
    },
    textHeader: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20,
    },
    text: {
      fontSize: 14,
      color: colors.white,
      textAlign: 'center',
    },
    inputContainer: {
      marginBottom: 10,
    },
    buttonIcon: {
      marginRight: 10,
      width: 20,
      height: 20,
    },
    header: {
      alignItems: 'flex-end',
      marginHorizontal: 20
    }
  });

export default ({navigation}) => {

  const [value, setValue] = useState('100');

  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading
  } = useContext(ConversionContext);

  const conversionRate = rates[quoteCurrency];

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push('Options')}>
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/background.png')}
            style={styles.logoBackground}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.textHeader}>Currency Converter</Text>

        {isLoading ? (<ActivityIndicator color={colors.white} size="large" />) : (
          <> 
            <View style={styles.inputContainer}>
              <ConversionInput
                text={baseCurrency}
                value={value}
                onButtonPress={() => 
              navigation.push('Currency List', {
                title: 'Base Currency', 
                isBaseCurrency: true
              })}
                keyboardType="numeric"
                onChangeText={(text) => setValue(text)}
              />
              <ConversionInput
                text={quoteCurrency}
                value={value && `${(parseFloat(value)*conversionRate).toFixed(2)}`}
                editable={false}
                onButtonPress={() => 
              navigation.push('Currency List', {
                title: 'Quote Currency', 
                isBaseCurrency: false
              })}
              />
            </View>
            <Text style={styles.text}>
              {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
              date && format(new Date(date), 'MMM do, yyyy')
            }`}
            </Text>

            <Button 
              text="Reverse Currencies" 
              onPress={() => swapCurrencies()} 
              image={(
                <Image
                  source={require('../assets/images/reverse.png')}
                  style={styles.buttonIcon}
                  resizeMode="contain"
                />
        )}
            />
          </>
        )}
      </View>
    </View>
  )
}