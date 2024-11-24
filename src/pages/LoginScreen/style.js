import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242F1F',
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
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor: 'skyblue'
    },
    section3: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: hp(5),
        //backgroundColor: 'hotpink'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: wp(5),
        marginTop: wp(5),
        marginRight: hp(30),
    },
    input: {
        backgroundColor: '#E3E0E0',
        borderRadius: 10,
        width: '80%',
        height: hp(6),
        marginTop: wp(3),
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
    footer: {
        flex: 0.5,
        //backgroundColor: 'lightgreen',
    }
})

export default styles