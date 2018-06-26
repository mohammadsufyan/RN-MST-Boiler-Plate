import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF80',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 64 : 54,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C050',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: '500',
  },
  leftView: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  navImage: {
    width: 20,
    height: 20,
  },
  rightView: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
});

const NavBar = ({
  title,
  showBackButton,
  backButtonImage,
  backButtonAction,
  showRightButton,
  rightButtonImage,
  rightButtonAction,
}) => (
  <View style={styles.container}>
    <View style={styles.leftView}>
      {showBackButton ?
        <TouchableOpacity
          style={{ alignSelf: 'stretch', flex: 1, paddingVertical: 10 }}
          onPress={() => backButtonAction()}
        >
          <Image style={styles.navImage} source={backButtonImage} />
        </TouchableOpacity>
        : null }
    </View>
    <View style={styles.headerView}>
      <Text
        style={styles.titleText}
        numberOfLines={2}
        lineBreakMode={'tail'}
      >{title}</Text>
    </View>
    <View style={styles.rightView}>
      {showRightButton ?
        <TouchableOpacity
          style={{ alignSelf: 'stretch', flex: 1, paddingVertical: 10, alignItems: 'flex-end' }}
          onPress={() => rightButtonAction()}
        >
          <Image style={styles.navImage} source={rightButtonImage} />
        </TouchableOpacity>
        : null
      }
    </View>
  </View>
);

NavBar.propTypes = {
  title: PropTypes.string,
  leftView: PropTypes.element,
  rightView: PropTypes.element,
  showBackButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  backButtonImage: PropTypes.any,
  backButtonAction: PropTypes.func,
  rightButtonImage: PropTypes.any,
  rightButtonAction: PropTypes.func,
};

NavBar.defaultProps = {
  title: 'Home',
  leftView: null,
  rightView: null,
  showBackButton: false,
  showRightButton: false,
  backButtonImage: null,
  backButtonAction: () => {},
  rightButtonImage: null,
  rightButtonAction: () => {},
};
export default NavBar;
