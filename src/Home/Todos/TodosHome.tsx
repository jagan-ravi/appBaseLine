import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Item} from './Item';
type item = {
  id: string;
  title: string;
};
const data: Array<item> = [
  {id: '1', title: 'Learn Redux'},
  {id: '2', title: 'Learn Redux'},
  {id: '3', title: 'Learn Redux'},
  {id: '4', title: 'Learn Redux'},
  {id: '5', title: 'Learn Redux'},
];
export const TodosHome = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}: {item: item}) => {
          return <Item item={item} />;
        }}
      />
    </View>
  );
};
