// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native";

// import { books } from '../Data'
// import Product from '../components/Product'
// import { connect } from 'react-redux'
// import ShoppingCartIcon from './../containers/ShoppingCartIcon'
// class BooksScreen extends Component {
//     static navigationOptions = {
//         headerTitle: 'HOME',
//         headerRight: (
//             <ShoppingCartIcon/>
//         ),
//       };
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Product prod={books} />
//             </View>
//         );
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
//     }
// }
// export default connect(null, mapDispatchToProps)(BooksScreen);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });