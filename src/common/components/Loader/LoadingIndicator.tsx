import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    elevation: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSquare: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(10),
    backgroundColor: 'black',
  },
});
export const LoadingIndicator = ({loading, name}: {loading: boolean; name?: string}) => {
  useEffect(() => {
    console.log('Loading Screen :', name);
  }, [loading]);
  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.iconSquare}>
          <LottieView
            source={require('../../theme/lottieFiles/loadingSphere1.json')}
            autoPlay
            loop
            style={{borderRadius: moderateScale(75)}}
          />
        </View>
      </View>
    );
  }
  return <></>;
};
