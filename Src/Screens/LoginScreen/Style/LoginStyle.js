import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    main:
    {
        backgroundColor:'white',
         flex:1
    },
   
    logintext:
    {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
       marginTop:100,
        textAlign: 'center'
    },
    logindescription:
    {
        fontSize: 14,
        color: 'black',
       marginTop:10,
       maxWidth:500,
      alignSelf:'center'
       
    },
    image:
    {
        height:200,width:200,alignSelf:'center',top:80,borderRadius:120,borderWidth:1,backgroundColor:'white'
    },
    phonenotext:
    {
        marginTop:30, fontSize: 16, marginLeft: 40, color: 'black', fontWeight: 'bold'
    },
    phonenotextinput:
    {
        flexDirection: 'row', marginTop: 10, borderRadius: 18,
        borderWidth: 0.8,
        borderColor: 'grey', height: 60, width: 340,
        alignItems: 'center',
        alignSelf: 'center',
        padding:15,
        
    },
   
    continuebutton: {
        borderRadius: 18,
        borderWidth: 0.8,
        borderColor: 'grey',
        alignSelf:'center',
        backgroundColor: 'black',
        justifyContent: 'center',
        height: 60, width: 340,
        marginTop:30

    },
    continuebuttontext:
    {

       color: 'white', fontSize: 18,justifyContent:'center',alignSelf:'center'
    },
   
});
