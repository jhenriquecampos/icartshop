import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import ShopCell from '../components/tablecells/ShopCell'
import { product, producttypes } from '../Data'
// import { connect } from 'react-redux'
import ShoppingCartIcon from './../components/ShoppingCartIcon'
// import Menu from './ClientSideMenu'

class ShopScreen extends Component {

    // static navigationOptions = {
    //     headerTitle: 'Shop',
    //     headerRight: (
    //         <ShoppingCartIcon/>
    //     ),
    //   };

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={product}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ShopCell {...item} />} />
            </ScrollView>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
//     }
// }

export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});