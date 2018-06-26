import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  appRow: {
    width: width - 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  appImageLeft: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  appImageRight: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginLeft: 12,
  },
  appName: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
  },
  appRights: {
    color: '#00000080',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
  }
})

const isEven = index => (index % 2 === 0 ? true : false);

const Container = props => (
  <View style={styles.container}>
    <FlatList
      style={{ flex: 1 }}
      data={props.appsList}
      keyExtractor={(item, index) => index}
      renderItem={({ item, index }) => {
        if (isEven(index)) {
          return (
            <View style={styles.appRow}>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} style={styles.appName}>{item.name}</Text>
                <Text numberOfLines={1} style={styles.appRights}>{item.rights}</Text>
              </View>
              <Image style={styles.appImageRight} source={{ uri: item.image }} resizeMode="cover"/>
            </View>
          )  
        }
        return (
          <View style={styles.appRow}>
            <Image style={styles.appImageLeft} source={{ uri: item.image }} resizeMode="cover"/>
            <View style={{ flex: 1 }}>
              <Text numberOfLines={2} style={styles.appName}>{item.name}</Text>
              <Text numberOfLines={1} style={styles.appRights}>{item.rights}</Text>
            </View>
          </View>
        )}}
    />
  </View>
)

export default Container;
