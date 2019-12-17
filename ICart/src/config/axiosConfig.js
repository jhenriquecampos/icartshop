import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-native-icart.firebaseio.com/'
})

export default instance