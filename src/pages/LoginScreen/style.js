import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEDD0',
    },
    header: {
        flex: 0.5,
        //backgroundColor: 'tomato',
    },
    main: {
        flex: 4,
        display: 'flex',
    },
    imgLogo: {
        width: wp(40),
        height: hp(40),
    },
    section1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'orange',
    },
    section2: {
        flex: 2,
        //backgroundColor: 'skyblue'
    },
    section3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        //backgroundColor: 'hotpink'
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
        borderRadius: 5,
        width: '80%',
        height: hp(5),
        marginTop: wp(3),
        marginLeft: wp(8),
        paddingLeft: 10,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#CA643C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: '40%',
        height: hp(8),
        marginBottom: wp(7),
        shadowColor: '#000',
    },
    button_2: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: '40%',
        height: hp(8),
        marginBottom: wp(7),
        shadowColor: '#000',
    },
    textButton: {
        color: '#FFEDD0',
        fontSize: wp(5),
        fontWeight: '400',
    },
    textButton_2: {
        color: '#CA643C',
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
    footer: {
        flex: 0.5,
        //backgroundColor: 'lightgreen',
    }
})

export default styles