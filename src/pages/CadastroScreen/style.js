import { StyleSheet, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242F1F',
    },
    main: {
      flex: 4,
      display: 'flex',
    },
    imgLogo: {
      width: wp(30),
      height: hp(30),
    },
    section1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'orange',
    },
    section2: {
      flex: 2,
      justifyContent: 'space-evelyn',
      alignItems: 'center',
      //backgroundColor: 'skyblue'
    },
    text: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: wp(5),
      marginTop: wp(3),
      marginRight: hp(30),
    },
    input: {
      backgroundColor: '#E3E0E0',
      borderColor: '#ccc',
      height: hp(6),
      borderRadius: 10,
      paddingLeft: 10,
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: '#E3E0E0',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      width: '80%',
      height: hp(6),
      shadowColor: '#000',
    },
    textButton: {
        color: '#242F1F',
        fontSize: wp(5),
        fontWeight: 'bold',
    },
    buttonShadow: {
        shadowOffset: {
            height: 4,
        },
        shadowRadius: 4,
        shadowOpacity: 0.25,
    },
    androidShadow: {
      elevation: 5,
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      height,
      width,
    },
    footer: {
      flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: 'lightgreen',
    },
})

export default styles