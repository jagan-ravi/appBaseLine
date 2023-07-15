import React from 'react';
import {View} from 'react-native';
import {Label} from 'common/components';
import {moderateScale} from 'react-native-size-matters';
const style = {
  container: {
    height: moderateScale(50),
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    margin: moderateScale(5),
    borderRadius: moderateScale(25),
  },
};
export const Item = ({item}: {item: {id: string; title: string}}) => {
  return (
    <View style={style.container}>
      <Label value={item.title} style={{alignSelf: 'center'}}></Label>
    </View>
  );
};
