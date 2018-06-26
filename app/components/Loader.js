import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#00000070',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    position: 'absolute',
  },
  activityContainer: {
    backgroundColor: 'white',
    width: width - 150,
    height: width / 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },
});

const LoaderSize = 'large';

const Loader = props => (
  <View style={styles.container}>
    <View style={styles.activityContainer}>
      <ActivityIndicator
        animating={props.isAnimating}
        size={LoaderSize}
        style={{ marginRight: 10 }}
        color={'grey'}
      />
      <Text>{props.loadingText}</Text>
    </View>
  </View>
);

Loader.defaultProps = {
  isAnimating: false,
  color: 'grey',
  loadingText: 'Loading ...',
};

export default Loader;
