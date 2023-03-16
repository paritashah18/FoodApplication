import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    main:
    {
        backgroundColor: 'white',
        flex: 1
    },
    logo:
    {
        marginTop: 10,
    },
    logintext:
    {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 100,
        textAlign: 'center',
    },
    logindescription:
    {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        maxWidth: 500,

        paddingHorizontal: 20,
        textAlign: 'center'

    },
    otpbox:
    {
        flexDirection: 'row',
        justifyContent: 'space-evenly',


    },
    otpno:
    {
        flexDirection: 'row',

        borderRadius: 10,
        height: 55,
        width: '12%',
        marginTop: 10,
        borderWidth: 0.7,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20
    },
    image:
    {
        height: 200, width: 200, alignSelf: 'center', top: 60, borderRadius: 120, borderWidth: 1, backgroundColor: 'white'

    },
    phonenotext:
    {

        marginTop: 30, fontSize: 16, marginLeft: 40, color: 'black', fontWeight: 'bold', marginHorizontal: 20
    },
    phonenotextinput:
    {
        flexDirection: 'row', marginTop: 10, borderRadius: 18,
        borderWidth: 0.8,
        borderColor: 'grey', height: 60, width: 340,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,

    },

    continuebutton: {
        borderRadius: 18,
        borderWidth: 0.8,
        borderColor: 'grey',
        alignSelf: 'center',
        backgroundColor: 'black',
        justifyContent: 'center',
        height: 60, width: 340,
        marginTop: 30

    },
    continuebuttontext:
    {

        color: 'white', fontSize: 18, justifyContent: 'center', alignSelf: 'center'
    },

});
