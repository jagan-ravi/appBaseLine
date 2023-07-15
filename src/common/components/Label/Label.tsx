import React from 'react';
import {Text} from 'react-native';
export const Label = ({value, style}: {value: string; style?: object}) => {
  return <Text style={{...style}}>{value}</Text>;
};
