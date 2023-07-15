import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Home} from './src/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <Home />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
