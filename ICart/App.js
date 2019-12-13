import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'

import AppSwitchMenu from './src/AppSwitchMenu'


const store = storeConfig()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppSwitchMenu />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
