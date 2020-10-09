import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222736'
    },
    header: {
        backgroundColor: '#32394E',
        height: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        flexDirection: 'row',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 17,
        textTransform: 'uppercase'
    },
    headerAvatar: {
        backgroundColor: '#2948DF',
        padding: 9,
        borderRadius: 50
    },
    headerAvatarText: {
        color: '#fff'
    }
});