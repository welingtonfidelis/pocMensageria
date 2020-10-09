import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    button: {
        backgroundColor: '#2948DF',
        height: 55,
        borderRadius: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2948DF'
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textTransform: 'uppercase'
    }
});