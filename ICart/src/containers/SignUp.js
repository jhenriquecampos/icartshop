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
import { connect } from 'react-redux'
import { addUser } from './../store/actions/user'

class SignUp extends React.Component {

  state = {
    email: '', name: '', password: '', repeatPassword: '', type: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
 
  signUp = () => {
    this.setState({ type: 'Cliente' })
    if (this.validateFields()) {
      this.props.onSignUp({ ...this.state })
      alert('Usuário do tipo '+this.state.type+' adicionado com sucesso!')
      this.props.navigation.navigate('Login')
    }
  }

  validateFields = () => {
    // return true
    if (this.state.email == '') {
      alert('O campo E-mail é obrigatório')
      return false
    } else if (this.state.name == '') {
      alert('O campo Nome é obrigatório')
      return false
    } else if (this.state.password == '') {
      alert('O campo Senha é obrigatório')
      return false
    } else if (this.state.repeatPassword == '') {
      alert('O campo Senha Novamente é obrigatório')
      return false
    } else if (this.state.password != this.state.repeatPassword) {
      alert('Os campos Senha e Senha Repetida devem ser iguais')
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style = {styles.input}
          placeholder='E-mail' keyboardType = 'email-address'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style = {styles.input}
          placeholder='Nome'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style = {styles.input}
          placeholder='Senha'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style = {styles.input}
          placeholder='Senha Novamente'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('repeatPassword', val)}
        />
        <TouchableOpacity
            style = {styles.button}
            onPress = {this.signUp}>
            <Text style = {styles.textButton}>Criar Conta</Text>
         </TouchableOpacity>
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Login')}
          style = {{ marginTop: 20 }}>
          <Text style = {{ color: '#fff', fontWeight: 'bold' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: user => dispatch(addUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)