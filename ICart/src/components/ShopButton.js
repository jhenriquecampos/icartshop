import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import { shopFromCart } from '../store/actions/shopFromCart'
import {Platform, ToastAndroid, Alert } from "react-native";

class ShopButton extends Component {

    shopFromCart = () => {
        this.props.onShopFromCart()
        let msg = "Compra efetuada com sucesso!";
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG);
        } else {
            Alert.alert("Sucesso", msg);
        }
    }
    
    // calculateTotal = () => {
    //     this.props
    // }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.total}>Total: R${this.props.total}</Text>
                <TouchableOpacity
                    style = {styles.shopButton}
                    onPress = {this.shopFromCart}>
                    <Text style = {styles.shopButtonText}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = ({ cartItems }) => {
    let total = 0.00
    cartItems.forEach(element => {
        total = total + (element.product.price * element.count)
    })
    return {
        total: total
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onShopFromCart: () => dispatch(shopFromCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopButton)

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    shopButton: {
        backgroundColor: '#13c162',
        padding: 7,
        borderWidth: 1,
        borderColor: '#13c162',
    },
    shopButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    total: {
        fontSize: 10,
        fontStyle: 'italic',
        marginRight: 5,
    }
});