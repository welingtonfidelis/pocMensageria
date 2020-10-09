import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222736'
    },
    contentInput: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32394E',
        padding: 10
    },
    input: {
        flex: 4,
        borderWidth: 1,
        borderColor: '#A6B0CF',
        marginRight: 10,
        color: '#A6B0CF',
        fontSize: 17
    },
    button: {
        height: '100%',
        borderRadius: 4,
        backgroundColor: '#51A6F1',
        flex: 1
    }
});