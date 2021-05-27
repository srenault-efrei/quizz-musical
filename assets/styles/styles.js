import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    viewIconUser: {
        width: '100',
    },
    container: {
        flex: 1,
        flexDirection: "column",

    },
    content: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    avatar: {
        width: "40%",
        alignItems: "center"
    },

    mode: {
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#ccc',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: '#ccc',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    avatarPropView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    propTitle: {
        fontWeight: 'bold'
    },
    colorViewSelector: {
        flex: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    avatarNameView: {
        height: 25,
        minWidth: '50%',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 45,
        marginTop: 5,
        paddingHorizontal: 10
    },
    avatarButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    avatarName: {
        fontSize: 20,
        //fontWeight: 'bold',
        paddingTop: 5,
        color: 'white'
    },
    inputName: {
        minHeight: 30,
        minWidth: '50%',
        width: 'auto',
    }
})