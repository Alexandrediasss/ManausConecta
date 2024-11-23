import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242F1F',
    },
    imgLogo:{
        width: wp(40),
        height: hp(40),
    },
    filho1:{
        flex:1.5,
    },
    filho2:{
        flex:0.5,
        backgroundColor: '#FFEDD0',
        width: "100%",
        justifyContent: 'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    filho3:{
        flex:1.5, 
        alignItems:'center',
        justifyContent: 'center',
        width: "100%",
    },
    filho4:{
        flex:0.5,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    imgFilho3:{
        flex: 1,
        width: "100%",
        alignContent:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    container1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        transform: [{ rotate: '180deg' }],
    },
    container2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    textFilho2:{
        color: '#242F1F',
        fontSize: wp(5),
        fontWeight: 'bold',
        textAlign: 'center',
        shadowOffset: {
            height: 4,
        },
        shadowRadius: 4,
        shadowOpacity: 0.25,
    },

    button: {
        backgroundColor: '#242F1F',
        borderRadius: 25,    
        width: 50,          
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center',     
        margin: 5,
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    textSeta:{
        color: 'transparent',
        fontSize: 20,
    },
    bola1:{
        backgroundColor: '#FFFFFF',
        borderRadius: 25,  
        borderWidth: 2,  
        borderColor: '#FFFFFF',
        width: 25,          
        height: 25,
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
    bola2:{
        borderRadius: 25,  
        borderWidth: 2,  
        borderColor: '#FFFFFF',
        width: 25,          
        height: 25,
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
  });

export default styles