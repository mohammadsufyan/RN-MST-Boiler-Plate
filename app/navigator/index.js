import {
  Dimensions,
  Platform,
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from '../screens/Home';

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    key: 'HomeScreen',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
}, {
  headerMode: 'none',
});

export default RootNavigator;
