import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import { product } from '../Data'
import AdminProdsCell from '../components/tablecells/AdminProdsCell'

export default class AdminHomeScreen extends Component {

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={product}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <AdminProdsCell {...item} />} />
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