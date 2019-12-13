import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import ShoppingCartIcon from './../containers/ShoppingCartIcon'
import { connect } from 'react-redux'

class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: 'HOME',
        headerRight: (
            <ShoppingCartIcon/>
        ),
      };
    render() {
        return (
            <View style={styles.container}>
                <Button title="Shop" onPress={() => this.props.navigation.navigate('Shop')} />
                <Button title="Cart" onPress={() => this.props.navigation.navigate('Cart')} />
            </View>
        );
    }
}

// const mapStateToProps = ({ user }) => {
//     return {
//         userName: user.name
//     }
// }

// export default connect(mapStateToProps, null)(HomeScreen)
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});