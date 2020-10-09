import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    contentAgent: {
        backgroundColor: '#2A3042',
        marginVertical: 5,
        marginLeft: 55,
        marginRight: 12,
        padding: 4,
        borderRadius: 4
    },
    contentConsumer: {
        backgroundColor: '#2F3453',
        marginVertical: 5,
        marginLeft: 12,
        marginRight: 55,
        padding: 4,
        borderRadius: 4
    },
    textMessage: {
        color: '#A6B0CF',
        fontSize: 14
    },
    textDate: {
        color: '#fff',
        textAlign: 'right',
        marginTop: 4
    }
});