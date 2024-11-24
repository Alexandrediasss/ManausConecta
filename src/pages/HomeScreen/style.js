import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    filho1:{
        flex: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //backgroundColor: 'lightgreen',
    },
    filho2:{
        flex: 1,
        width: '100%',
        alignItems: 'baseline',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: "row",
        //backgroundColor: 'skyblue',
    },
    filho3:{
        flex: 1,
        width: '100%',
        alignItems: 'baseline',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: "row",
        //backgroundColor: 'orange',
    },
    filho4:{
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //backgroundColor: 'tomato',
    },
    imgLogo:{
        width: "70%",
        height: "70%",
    },
    imgIcone:{
        width: wp(10),
        height: hp(8),
        resizeMode: 'contain',
    },
    button1: {
        alignItems: 'center',
        padding: 10,    
        justifyContent: 'center',
        width: "90",
        height: "90%",
        backgroundColor: 'transparent',
        marginBottom: 10,
        marginHorizontal: 5,
        paddingHorizontal: 5,
      },
      box:{
        width: "80%",
        height: "28%",
        backgroundColor: '#204F3C',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center'
      },
      label:{
        color: '#E3E0E0',
        fontWeight: "bold",
      },
      label1:{
        color: '#204F3C',
        fontWeight: "bold",
        fontSize: wp(3),
      },
  });

export default styles