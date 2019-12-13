import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    return (
        <View style = {styles.text}>
            <Text style = {styles.itemName}>{props.item.product.name}</Text>
            <Text style = {styles.itemPrice}>quantidade: {props.item.count} | R${props.item.count * props.item.product.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemName: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 10,
    }
})