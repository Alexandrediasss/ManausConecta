import { StyleSheet, TextInputBase } from "react-native";

const styles = StyleSheet.create({
    main:{
        flexGrow: 1,
        backgroundColor: '#919B8F',
        alignItems: 'center',
    },
    pai:{
        width: "95%",
        height: 120,
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginTop: 15,
    },
    filho1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filho2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    img:{
        width: "90%",
        height: "90%",
        borderRadius: 10,
    },
    label1:{
        color: '#06421D',
        fontWeight: 'bold',
        fontSize: 10,
    },
    label2:{
        color: '#06421D',
        fontSize: 10,
    },
  });

export default styles