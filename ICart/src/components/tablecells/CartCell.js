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
import Item from '../Item';
import { removeItemFromCart } from '../../store/actions/removeItemFromCart'
import {Platform, ToastAndroid, Alert } from "react-native";

class ShopScreen extends Component {

    state = {
        item: this.props.item
    }

    removeItemFromCart = () => {
        this.props.onRemoveFromCart({ ...this.state.item })
        let msg = "Item removido com sucesso!";
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG);
        } else {
            Alert.alert("Remoção", msg);
        }
    }

    render() {
        return (
            <View style = {styles.cell}>
                <Item item={this.props.item} />
                <View style = {styles.shop}>
                    <Button
                        title = 'Remover'
                        onPress = {this.removeItemFromCart} />
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFromCart: item => dispatch(removeItemFromCart(item))
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
    }
});