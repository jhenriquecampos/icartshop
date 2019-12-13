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
            <Text style = {styles.prodName}>{props.prod.name}</Text>
            <Text style = {styles.prodPrice}>R${props.prod.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    prodName: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    prodPrice: {
        fontSize: 10,
    }
})

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });

// class Products extends Component {

//     renderProducts = (products) => {
//         console.log(products)
//         return products.map((item, index) => {
//             return (
//                 <View key={index} style={{ padding: 20 }}>
//                     <Button 
//                         onPress={() => this.props.onPress(item)}
//                         title={item.name + " - " + item.price} />
//                 </View>
//             )
//         })
//     }



//     render() {
//         return (
//             <View style={styles.container}>
//                 {this.renderProducts(this.props.products)}
//             </View>
//         );
//     }
// }
// export default Products;