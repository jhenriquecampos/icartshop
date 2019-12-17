import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity
} from "react-native";
import {Platform, ToastAndroid, Alert } from "react-native";
import { connect } from 'react-redux';
import Product from '../Product';
import { removeProduct } from '../../store/actions/product';

class ShopScreen extends Component {

    state = {
        product: this.props,
    }

    removeProduct = () => {
        alert('Kk eae man')
        // this.props.onRemoveProduct()
    }

    render() {
        return (
            <View style = {styles.cell}>
                <Product prod={this.state.product} />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveProduct: item => dispatch(removeProduct(item))
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