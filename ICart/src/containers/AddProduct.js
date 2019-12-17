import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'
import styles from '../styles/index'
export default class SignUp extends React.Component {
  
  state = {
    name: '',
    price: null,
    type: null,
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  render() {
    return (
        
      <View style={styles.container}>
          <TextInput
              onChangeText={(name) => this.setState({ name: name })}
              value={this.state.name}
              style = {styles.input}
              placeholder="Nome do Produto"
          />
          <TextInput
              onChangeText={(price) => this.setState({ productPrice: price })}
              value={this.state.productPrice}
              style = {styles.input}
              placeholder="Preço"
          />
          <TouchableOpacity
              style = {styles.button}>
              <Text style = {styles.textButton}>Adicionar Produto</Text>
          </TouchableOpacity>
      </View>
    )
  }
}