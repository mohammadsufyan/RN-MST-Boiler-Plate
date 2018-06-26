import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { observer } from 'mobx-react'
import NavigationBar from '../../components/NavigationBar';
import Loader from '../../components/Loader';
import Container from './components/Container';

import AppsList from '../../store/AppsList';

@observer
export default class Home extends Component<{}> {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    AppsList.getAppsList()
  }

  render() {
    const { isLoading, appsList } = AppsList
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar />
        <Container appsList={appsList.slice()} />
        {isLoading && <Loader isAnimating={isLoading}/>}
      </View>
    )
  }
}
