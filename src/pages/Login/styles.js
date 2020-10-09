import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222736'
    },
    header: {
        backgroundColor: '#556EE6',
        padding: 10,
        flex: 2
    },
    headerTextTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerTextSubTitle: {
        color: '#fff',
        fontSize: 16
    },
    imageLogo: {
        height: 90,
        width: 90,
        backgroundColor: '#32394E',
        borderRadius: 150,
        marginTop: 10
    },
    body: {
        flex: 11,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 20
    },
    contentSlug: {
        marginBottom: 25
    },
    contentButton: {
        marginTop: 70
    },
    contentFooter: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    footerText: {
        color: '#fff',
        textAlign: 'center'
    }
});
