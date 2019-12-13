import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'

import AppSwitchMenu from './src/AppSwitchMenu'
// import Menu from './src/containers/Menu'


const store = storeConfig()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppSwitchMenu />
        {/* <Menu /> */}
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
