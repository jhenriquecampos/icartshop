import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
    },
    text: {
      color: 'yellow',
      fontSize: 50
    },
    slogan: {
      color: '#000'
    },
    button: {
        width: 300,
        height: 42,
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db'
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    }
  });


  export default styles;