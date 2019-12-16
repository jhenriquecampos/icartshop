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
    username: '', senha: '', email: '', telefone: '', productName: '',
    productDescription: '',
    productPrice: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
 
  login = () => {
        this.props.navigation.navigate('ClientSideMenu')
    }


  render() {
    const productDetails = {
        name: this.state.productName,
        description: this.state.productDescription,
        price: this.state.productPrice
    }
    return (
        
        <View style={styles.container}>
        <Text style = {styles.textButton}>Adicionar Produto</Text>
        <TextInput
            onChangeText={(name) => this.setState({ productName: name })}
            value={this.state.productName}
            style = {styles.input}
            placeholder="Nome do Produto"
        />
        <TextInput
            onChangeText={(price) => this.setState({ productPrice: price })}
            value={this.state.productPrice}
            style = {styles.input}
            placeholder="Preço"
        />
        <TextInput
            onChangeText={(name) => this.setState({ productName: name })}
            value={this.state.productName}
            style = {styles.input}
            placeholder="Tipo do Produto"
        />
        <TouchableOpacity
            style = {styles.button}>
            <Text style = {styles.textButton}>Adicionar Produto</Text>
        </TouchableOpacity>
    </View>
    )
  }
}