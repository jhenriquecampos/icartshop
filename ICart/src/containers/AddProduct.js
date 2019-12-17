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
import { connect } from 'react-redux'
import styles from '../styles/index'
import { addProduct } from './../store/actions/product'

class AddProduct extends React.Component {
  
  state = {
    name: '',
    price: '',
    type: '',
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  addProduct = () => {
    this.props.onAddProduct({ ...this.state })
    alert('Produto adicionado com sucesso')
    this.props.navigation.navigate('AdminHomeScreen')
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
              onChangeText={(price) => this.setState({ price: price })}
              value={this.state.price}
              style = {styles.input}
              placeholder="Preço"
          />
          <TextInput
              onChangeText={(type) => this.setState({ type: type })}
              value={this.state.type}
              style = {styles.input}
              placeholder="Tipo"
          />
          <TouchableOpacity
            onPress = {this.addProduct}
            style = {styles.button}>
            <Text style = {styles.textButton}>Adicionar Produto</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: product => dispatch(addProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(AddProduct)