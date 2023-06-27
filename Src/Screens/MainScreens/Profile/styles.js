import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1, marginTop: 10
    },
   
    profiletext:
    {
        fontSize: 22,
        color: 'black',
        alignSelf: 'center',
        top: 10,
        fontFamily: 'VarelaRound-Regular',
    },
    usernametext:
    {
        fontSize: 16,
        marginHorizontal: 15,
        color: 'black',
        marginBottom: 40,
        fontFamily: 'VarelaRound-Regular'
    },
    searchinputtext:
    {
        marginLeft: 8, fontSize: 16, width: '88%', fontFamily: 'VarelaRound-Regular'
    },
    suggesttext:
    {
        fontSize: 16, color: 'black', marginTop: 15, marginLeft: 5, fontFamily: 'VarelaRound-Regular'

    },
    viewalltext:
    {
        fontSize: 16, color: '#ff8b3d', marginLeft: 120, fontFamily: 'VarelaRound-Regular'
    },
    resturentmenutop:
    {
        flexDirection: 'row', marginTop: 15,
    },
    resturentmenutext:
    {
        fontSize: 16, color: 'black', marginLeft: 5, fontFamily: 'VarelaRound-Regular'
    },

    dish: {
        top: 170,
        position: 'absolute',
        fontSize: 15,
        marginHorizontal: 15,
        color: 'black',
        maxWidth: 400,
        fontFamily: 'VarelaRound-Regular'

    },
    category: {
        top: 190,
        position: 'absolute',
        fontSize: 12,
        marginHorizontal: 15,
        color: 'black',
        fontFamily: 'VarelaRound-Regular'

    },
    price: {
        top: 200,
        position: 'absolute',
        fontSize: 12,
        marginHorizontal: 15,
        color: 'black',
        fontFamily: 'VarelaRound-Regular'

    },
});
export default styles;