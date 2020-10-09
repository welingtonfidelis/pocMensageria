import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    label: {
        color: '#BFC8E2',
        marginTop: 3,
        marginBottom: 1
    },
    input: {
        backgroundColor: '#32394E',
        borderWidth: 1,
        borderColor: '#565A65',
        borderRadius: 4,
        color: '#BFC8E2'
    },
});