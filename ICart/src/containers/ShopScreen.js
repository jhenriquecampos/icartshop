import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import ShopCell from '../components/tablecells/ShopCell'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/actions/product'

class ShopScreen extends Component {

    filterProductsByType = (products) => {
        if (this.props.prodsType == 0) {
            return products
        } else {
            return products.filter((prod) => {return prod.type == this.props.prodsType})
        }
    }

    componentDidMount = () => {
        this.props.onFetchProducts()
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.filterProductsByType(this.props.products)}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ShopCell {...item} />} />
            </ScrollView>
        );
    }

}

const mapStateToProps = ({ products }) => {
    return {
        products: products.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});