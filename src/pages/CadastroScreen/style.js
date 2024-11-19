import { StyleSheet, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#FFEDD0',
    },
    section1: {
      flex: 2,
      //backgroundColor: 'orange',
    },
    text: {
      color: '#CA643C',
      fontWeight: '400',
      fontSize: wp(7),
      marginTop: wp(6),
      marginLeft: wp(8),
    },
    input: {
      backgroundColor: '#70845F',
      color: '#FFEDD0',
      borderColor: '#ccc',
      height: hp(5),
      fontSize: wp(3.5),
      borderRadius: 5,
      marginTop: wp(3),
      paddingLeft: 10,
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: '#CA643C',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      width: '50%',
      height: hp(5),
      marginTop: hp(15),
      shadowColor: '#000',
    },
    textButton: {
        color: '#FFEDD0',
        fontSize: wp(5),
        fontWeight: '400',
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
    },
})

export default styles