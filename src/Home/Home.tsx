import React from 'react';
import {View} from 'react-native';
import {LoadingIndicator} from '../common/components';
import {TodosHome} from './Todos/TodosHome';

export const Home = () => {
  return (
    <View style={{flex: 1}}>
      <LoadingIndicator loading={false} />
      <TodosHome />
    </View>
  );
};
