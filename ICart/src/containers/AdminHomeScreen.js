import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
// import { product } from '../Data'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/actions/product'
import AdminProdsCell from '../components/tablecells/AdminProdsCell'


class AdminHomeScreen extends Component {

    componentDidMount = () => {
        this.props.onFetchProducts()
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.props.products}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <AdminProdsCell {...item} />} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminHomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});