import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', marginTop: 10
    },
    carttext:
    {
        fontSize: 22,
        color: 'black',
        top: 10,
        textAlign: 'center',
        alignContent: 'center', fontFamily: 'VarelaRound-Regular',
        left: 130
    },
    totalamounttextview:
    {
        height: 40, backgroundColor: '#ffff', borderRadius: 20, marginTop: 15, marginHorizontal: 20, justifyContent: 'flex-start', flexDirection: 'row'
    },
    totalamounttext:
    {
        marginLeft: 20, marginRight: 180, fontFamily: 'VarelaRound-Regular', color: 'black', fontSize: 15, marginTop: 10
    },
    button:
    {
        borderRadius: 18, backgroundColor: '#ff8b3d', height: 60, width: 340, marginTop: 20, alignSelf: 'center', justifyContent: 'center'
    },
    buttontext:
    {
        color: 'white', fontSize: 18, justifyContent: 'center', alignSelf: 'center', fontFamily: 'VarelaRound-Regular',

    },
    price: {
        fontFamily: 'VarelaRound-Regular', color: 'black', fontSize: 15, marginTop: 10
    },


});
export default styles;