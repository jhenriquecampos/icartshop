import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import ShopCell from '../components/tablecells/ShopCell'
import ShoppingCartIcon from './../components/ShoppingCartIcon'
import { product } from '../Data'

export default class ShopScreen extends Component {

    filterProductsByType = (products) => {
        if (this.props.prodsType == 0) {
            return products
        } else {
            return products.filter((prod) => {return prod.type == this.props.prodsType})
        }
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.filterProductsByType(product)}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ShopCell {...item} />} />
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});