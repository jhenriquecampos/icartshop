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
    nome: '', senha: '', email: '', telefone: '', senhaNovamente: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
 
  validatePass = () => {
    if(this.state.senha === this.state.senhaNovamente && this.state.senha != '') {
      this.props.navigation.navigate('AddProduct')
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Image 
            source = {require('../assets/menu.png')}
            style = {styles.logo}/>
        <TextInput
          style = {styles.input}
          placeholder='E-mail'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style = {styles.input}
          placeholder='Senha'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('senha', val)}
        />
        <TextInput
          style = {styles.input}
          placeholder='Senha Novamente'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('senhaNovamente', val)}
        />
        <TextInput
          style = {styles.input}
          placeholder='Nome'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('nome', val)}
        />
        <TouchableOpacity
            style = {styles.button}
            onPress = {this.validatePass}>
            <Text style = {styles.textButton}>Criar Conta</Text>
         </TouchableOpacity>
      </View>
    )
  }
}