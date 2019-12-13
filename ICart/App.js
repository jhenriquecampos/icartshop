import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingCart from './src/ShoppingCart'
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'

const store = storeConfig()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
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
