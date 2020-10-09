import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    content: {
        borderWidth: 1,
        borderColor: '#2A3143',
        margin: 5,
        padding: 8,
        flexDirection: 'row',
        borderRadius: 4,
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: '#556EE6',
        borderRadius: 50,
        padding: 15,
        marginRight: 8,
    },
    avatarText: {
        color: '#fff',
        fontSize: 18
    },
    message: {
        flex: 8,
    },
    messageConsumer: {
        color: '#fff',
        fontSize: 16
    },
    messagePreview: {
        color: '#A6B0CF',
        fontSize: 13
    },
    status: {
        flex: 1,
        alignItems: 'flex-end'
    },
    statusText: {
        color: '#fff'
    },
    closedActive: {
        backgroundColor: '#28315B'
    }
});