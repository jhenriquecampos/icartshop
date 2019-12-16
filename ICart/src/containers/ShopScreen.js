import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import ShopCell from '../components/tablecells/ShopCell'
import { product } from '../Data'
import ShoppingCartIcon from './../components/ShoppingCartIcon'

export default class ShopScreen extends Component {

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={product.filter((prod) => {return prod.type != this.props.prodsType})}
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