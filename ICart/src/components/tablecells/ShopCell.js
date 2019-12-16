import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import Product from '../Product';
import { addItemToCart } from '../../store/actions/addItemToCart';
import {Platform, ToastAndroid, Alert } from "react-native";

class ShopScreen extends Component {

    state = {
        product: this.props,
        count: 1
    }

    add = () => {
        if(this.state.count < 10) {
            this.setState({
                count: this.state.count+1
            })
        }
    }

    sub = () => {
        if(this.state.count > 1) {
            this.setState({
                count: this.state.count-1
            })
        }
    }

    addItemToCart = () => {
        this.props.onAddToCart({ ...this.state })
        this.setState({
            count: 1
        })

        let msg = "Item adicionado ao carrinho!";
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG);
        } else {
            Alert.alert("Adicionado", msg);
        }
    }

    render() {
        return (
            <View style = {styles.cell}>
                <Product prod={this.state.product} />
                <View style = {styles.shop}>
                    <View style={styles.amount}>
                        <TouchableOpacity
                            style = {[styles.amountButtons, styles.amountButtonSub]}
                            onPress = {this.sub}>
                            <Text style = {styles.buttonsText}>-</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.amountInput}
                            value={this.state.count.toString()}/>
                        <TouchableOpacity
                            style = {[styles.amountButtons, styles.amountButtonAdd]}
                            onPress = {this.add}>
                            <Text style = {styles.buttonsText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <Button 
                        onPress={this.addItemToCart}
                        title = 'Adicionar' />
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: item => dispatch(addItemToCart(item))
    }
}

export default connect(null, mapDispatchToProps)(ShopScreen);
    
const styles = StyleSheet.create({
    cell: {
        backgroundColor: '#eee',
        width: '100%',
        marginBottom: 2,
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        
        // Flexbox
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    shop: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    amount: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 5,
    },
    amountInput: {
        backgroundColor: '#fff',
        textAlign: 'center',
        width: 20,
    },
    amountButtons: {
        borderRadius: 64,
        width: 20,
        height: 20,
        marginRight: 5,
        marginLeft: 5,
        alignItems: 'center',
    },
    amountButtonSub: {
        backgroundColor: '#c91d2e',
    },
    amountButtonAdd: {
        backgroundColor: '#1dc942',
    },
    buttonsText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});