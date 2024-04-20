import React, {useContext} from 'react';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Currencies from '../data/Currencies.json';
import { RowItem, RowSeperator } from '../components/RowItem';
import colors from '../constants/colors';
import { ConversionContext } from '../util/ConversionContext';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});

export default ({ navigation, route = {} }) => {

  const params = route.params || {};

  const {setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency} = useContext(ConversionContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={Currencies}
        renderItem={({ item }) => {
          let selected = false;
          if(params.isBaseCurrency && item === baseCurrency) {
            selected= true;
          }else if(!params.isBaseCurrency && item === quoteCurrency){
            selected = true;
          }

          return (
            <RowItem
              text={item}
              onPress={() => {
                if(params.isBaseCurrency)
                {
                  setBaseCurrency(item)
                }else{
                  setQuoteCurrency(item)
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeperator />}
      />
    </View>
  );
};