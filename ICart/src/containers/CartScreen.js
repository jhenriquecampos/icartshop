import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    Platform,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import CartCell from '../components/tablecells/CartCell'

class CartScreen extends Component {

    render() {

        return (
            <ScrollView>
                {this.props.cartItems.length > 0 ?
                    <FlatList
                        data = {this.props.cartItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem = {({ item }) => <CartCell item={item} />} />
                :
                    <View style={styles.container}>
                        <Text>Não há itens no carrinho</Text>
                    </View>
                }
            </ScrollView>
        );
    }

}

const mapStateToProps = ({ cartItems }) => {
    return {
        cartItems: cartItems
    }
}

export default connect(mapStateToProps, null)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shopButton: {
        backgroundColor: '#1dc942',
    },
    shopButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});